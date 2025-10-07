import type { Decimal } from "@prisma/client/runtime/library";

export type PRODUCT = {
  id?: number;
  nome: string;
  preco: Decimal;
  estoque: number;
};

export interface IProduct {
  create(product: PRODUCT): Promise<PRODUCT>;
  findById(id: number): Promise<PRODUCT | null>;
  findManyByIds(ids: number[]): Promise<PRODUCT[]>;
}
