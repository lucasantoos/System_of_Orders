export class ProductService {
    InterfaceReposiProduct;
    constructor(InterfaceReposiProduct) {
        this.InterfaceReposiProduct = InterfaceReposiProduct;
    }
    async CreateProdutc(Product) {
        const produto = {
            nome: Product.nome,
            preco: Product.preco,
            estoque: Product.estoque,
        };
        if (!produto.estoque || !produto.nome || !produto.preco)
            throw new Error("Todos os campos são obrigatórios");
        const newProduct = await this.InterfaceReposiProduct.create(produto);
        return newProduct;
    }
}
