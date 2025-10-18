import type { IProduct, PRODUCT } from "../../domain/Interfaces/IProduct.js";


export class ProductService {
    constructor(private InterfaceReposiProduct: IProduct) { }


    async ListAllProducts(id:number){

        if(!id || id < 0 || typeof(id) != typeof(Number()))throw new Error("Busca inválida")
        const productsExits = await this.InterfaceReposiProduct.findById(id)

        if(!productsExits) throw new Error("Produto incexistente neste sistema")

            return productsExits
    }

    async CreateProdutc(Product: PRODUCT) {
        const produto = {
            nome: Product.nome,
            preco: Product.preco,
            estoque: Product.estoque,
        }

        if (!produto.estoque || !produto.nome || !produto.preco) throw new Error("Todos os campos são obrigatórios")

        
        const newProduct = await this.InterfaceReposiProduct.create(produto)

        return newProduct
    }
}

