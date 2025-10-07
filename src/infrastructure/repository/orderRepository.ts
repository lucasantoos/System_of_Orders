import type { PrismaClient } from "@prisma/client";
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";

export class OrderRepository implements IOrder {
  constructor(private PrismaORM: PrismaClient) {}

  async save(order: ORDER): Promise<any> {
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

  async find(id: number): Promise<any> {
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
