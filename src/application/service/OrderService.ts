import { Decimal } from "@prisma/client/runtime/library";
import type { IOrder } from "../../domain/Interfaces/IOrder.js";
import type { IProduct } from "../../domain/Interfaces/IProduct.js";

export class OrderService {
    constructor(
        private OrderRepository: IOrder,
        private ProductRepository: IProduct
    ) { }

    async CreateOrder(orderData: { produtos: { produtoId: number; quantidade: number }[] }) {
        if (!orderData.produtos || orderData.produtos.length === 0) {
            throw new Error("Por favor, informe ao menos um produto no pedido.");
        }

        const ids = orderData.produtos.map(p => p.produtoId);
        const produtosEncontrados = await this.ProductRepository.findManyByIds(ids);

        if (!produtosEncontrados || produtosEncontrados.length === 0) {
            throw new Error("Nenhum dos produtos informados existe.");
        }


        const total = produtosEncontrados.reduce((acc, item) => {
            const produtoNoPedido = orderData.produtos.find(p => p.produtoId === item.id);
            if (!produtoNoPedido) return acc;
            return acc + (item.preco.toNumber() * produtoNoPedido.quantidade);
        }, 0);

        for (const p of orderData.produtos) {
            const existe = produtosEncontrados.find(prod => prod.id === p.produtoId);
            if (!existe) throw new Error(`Produto ID ${p.produtoId} não encontrado no banco`);
        }


        const newOrder = await this.OrderRepository.save({
            total: new Decimal(total),
            data_pedido: new Date(),
            produtos: orderData.produtos.map(p => {
                const produtoEncontrado = produtosEncontrados.find(i => i.id === p.produtoId);
                return {
                    produtoId: p.produtoId,
                    quantidade: p.quantidade,
                    preco_unitario: produtoEncontrado?.preco || new Decimal(0)
                };
            })
        });

        return newOrder;
    }
}
