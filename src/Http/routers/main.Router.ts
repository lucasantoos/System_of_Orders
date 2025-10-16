import type { FastifyInstance } from "fastify";
import { produtoController, orderController } from "../../main.js"

export function Routers(fastify: FastifyInstance) {
    fastify.post("/orders", orderController.createOrder)

    fastify.post("/products", produtoController.createProductService)
}