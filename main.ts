import fastify from "fastify"
import dotenv from "dotenv"
import formbody from "@fastify/formbody"
import { Routers } from "./src/Http/routers/main.Router.js"
import { ProductRepository } from "./src/infrastructure/repository/produtctRepository.js"
import Prisma from "./src/infrastructure/database/db.js"
import { ProductService } from "./src/application/service/ProductService.js"
import { ProductController } from "./src/Http/controller/product.Controller.js"
import { OrderRepository } from "./src/infrastructure/repository/orderRepository.js"
import { OrderService } from "./src/application/service/OrderService.js"
import { OrderController } from "./src/Http/controller/order.controller.js"


dotenv.config()
const app = fastify()

const env: any = {
    PORT: process.env.PORT ?? 3000,
    SECRET_KEY: process.env.SECRET_KEY
}



// dependencias de Products 
const produtoRepo = new ProductRepository(Prisma)
const produtoServi = new ProductService(produtoRepo)
const produtoController = new ProductController(produtoServi)

//dependencias de Orders
const orderReposi = new OrderRepository(Prisma)
const orderService = new OrderService(orderReposi, produtoRepo)
const orderController = new OrderController(orderService)

app.register(formbody)
app.register(Routers)




app.listen({ port: env.PORT }, () => {
    console.log(`server is running in port: ${env.PORT}`)
})

export { produtoController, orderController }