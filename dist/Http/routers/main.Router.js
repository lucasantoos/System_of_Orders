import { produtoController, orderController } from "../../main.js";
export function Routers(fastify) {
    fastify.post("/orders", orderController.createOrder);
    fastify.post("/products", produtoController.createProductService);
}
