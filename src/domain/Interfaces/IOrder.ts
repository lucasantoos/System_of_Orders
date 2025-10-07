import type { Decimal } from "@prisma/client/runtime/library";

export interface ORDER {
  total: Decimal;
  data_pedido: Date;
  produtos: {
    produtoId: number;
    quantidade: number;
    preco_unitario: Decimal;
  }[];
}

export interface IOrder {
  save(order: ORDER): Promise<ORDER>;
  find(id: number): Promise<ORDER | null>;
}
