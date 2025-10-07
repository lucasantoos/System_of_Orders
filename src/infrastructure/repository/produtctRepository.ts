import type { PrismaClient } from "@prisma/client";
import type { IProduct, PRODUCT } from "../../domain/Interfaces/IProduct.js";

export class ProductRepository implements IProduct {
  constructor(private prisma: PrismaClient) {}

  async create(product: PRODUCT): Promise<PRODUCT> {
    const produtoNew = await this.prisma.produto.create({
      data: {
        nome: product.nome,
        estoque: product.estoque,
        preco: product.preco,
      },
    });
    return produtoNew;
  }

  async findById(id: number): Promise<PRODUCT | null> {
    const produto = await this.prisma.produto.findUnique({
      where: { id },
    });
    return produto;
  }

  async findManyByIds(ids: number[]): Promise<PRODUCT[]> {
    const produtos = await this.prisma.produto.findMany({
      where: {
        id: { in: ids },
      },
    });
    return produtos;
  }
}
