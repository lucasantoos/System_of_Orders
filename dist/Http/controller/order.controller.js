export class OrderController {
    serviceOrder;
    constructor(serviceOrder) {
        this.serviceOrder = serviceOrder;
    }
    createOrder = async (req, rep) => {
        try {
            const { produtos } = req.body;
            if (!Array.isArray(produtos) || produtos.length === 0) {
                return rep.status(400).send({ erro: "É necessário enviar uma lista de produtos." });
            }
            const pedidoCriado = await this.serviceOrder.CreateOrder({
                produtos
            });
            return rep.status(201).send(pedidoCriado);
        }
        catch (e) {
            return rep.status(400).send({ erro: e.message || e });
        }
    };
}
