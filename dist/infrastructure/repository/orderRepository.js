export class OrderRepository {
    PrismaORM;
    constructor(PrismaORM) {
        this.PrismaORM = PrismaORM;
    }
    async save(order) {
        const newPedido = await this.PrismaORM.pedidos.create({
            data: {
                total: order.total,
                data_pedido: order.data_pedido,
                produtos: {
                    create: order.produtos.map((item) => ({
                        quantidade: item.quantidade,
                        preco_Unitario: item.preco_unitario,
                        produtos: {
                            connect: { id: item.produtoId },
                        },
                    })),
                },
            },
            include: {
                produtos: {
                    include: { produtos: true },
                },
            },
        });
        return newPedido;
    }
    async find(id) {
        const pedidos = await this.PrismaORM.pedidos.findUnique({
            where: { id },
            include: {
                produtos: {
                    include: { produtos: true },
                },
            },
        });
        return pedidos;
    }
}
