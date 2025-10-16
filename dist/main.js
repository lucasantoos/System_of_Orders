import fastify from "fastify";
import dotenv from "dotenv";
import formbody from "@fastify/formbody";
import { Routers } from "./Http/routers/main.Router.js";
import { ProductRepository } from "./infrastructure/repository/produtctRepository.js";
import Prisma from "./infrastructure/database/db.js";
import { ProductService } from "./application/service/ProductService.js";
import { ProductController } from "./Http/controller/product.Controller.js";
import { OrderRepository } from "./infrastructure/repository/orderRepository.js";
import { OrderService } from "./application/service/OrderService.js";
import { OrderController } from "./Http/controller/order.controller.js";
dotenv.config();
const app = fastify();
const env = {
    PORT: process.env.PORT ?? 3000,
    SECRET_KEY: process.env.SECRET_KEY
};
// dependencias de Products 
const produtoRepo = new ProductRepository(Prisma);
const produtoServi = new ProductService(produtoRepo);
const produtoController = new ProductController(produtoServi);
//dependencias de Orders
const orderReposi = new OrderRepository(Prisma);
const orderService = new OrderService(orderReposi, produtoRepo);
const orderController = new OrderController(orderService);
app.register(formbody);
app.register(Routers);
app.listen({ port: env.PORT }, () => {
    console.log(`server is running in port: ${env.PORT}`);
});
export { produtoController, orderController };
