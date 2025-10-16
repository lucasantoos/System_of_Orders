export class ProductController {
    ServicProduct;
    constructor(ServicProduct) {
        this.ServicProduct = ServicProduct;
    }
    createProductService = async (req, rep) => {
        try {
            const { nome, preco, estoque } = req.body;
            return rep.status(201).send(await this.ServicProduct.CreateProdutc({ nome, preco, estoque }));
        }
        catch (e) {
            return rep.status(400).send({ Erro: e.message });
        }
    };
}
