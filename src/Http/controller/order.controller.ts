import type { OrderService } from "../../application/service/OrderService.js";

export class OrderController {
  constructor(private serviceOrder: OrderService) { }

  createOrder = async (req: any, rep: any) => {
    try {
      const { produtos } = req.body;

      if (!Array.isArray(produtos) || produtos.length === 0) {
        return rep.status(400).send({ erro: "É necessário enviar uma lista de produtos." });
      }

      const pedidoCriado = await this.serviceOrder.CreateOrder({
        produtos
      });

      return rep.status(201).send(pedidoCriado);
    } catch (e: any) {
      return rep.status(400).send({ erro: e.message || e });
    }
  };

  listOrder = async (req: any, rep: any) => {
    try {
      const { id } = req.params

      const produto = await this.serviceOrder.ListOrder(parseInt(id))

      return rep.status(200).send({ produto })
    } catch (e: any) {
      return rep.status(400).send({ mensagem: e.message })
    }


  }
}
