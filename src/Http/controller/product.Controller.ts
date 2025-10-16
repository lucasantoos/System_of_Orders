import type { ProductService } from "../../application/service/ProductService.js";

export class ProductController {
    constructor(private ServicProduct: ProductService) { }

    createProductService = async (req: any, rep: any) => {
        try {
            const { nome, preco, estoque } = req.body
            const obj = {
                nome,
                preco,
                estoque:parseInt(estoque)
            }
            return rep.status(201).send(await this.ServicProduct.CreateProdutc({ nome, preco, estoque: obj.estoque }))
        } catch (e: any) {
            return rep.status(400).send({ Erro: e.message })
        }
    }

    ListProduct = async (req: any, rep: any) => {
        try {
            const {id} = req.params
            return rep.status(201).send(await this.ServicProduct.ListAllProducts(parseInt(id)))
        } catch (e: any) {
            return rep.status(400).send({ Erro: e.message })
        }
    }


}