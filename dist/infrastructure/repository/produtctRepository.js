export class ProductRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(product) {
        const produtoNew = await this.prisma.produto.create({
            data: {
                nome: product.nome,
                estoque: product.estoque,
                preco: product.preco,
            },
        });
        return produtoNew;
    }
    async findById(id) {
        const produto = await this.prisma.produto.findUnique({
            where: { id },
        });
        return produto;
    }
    async findManyByIds(ids) {
        const produtos = await this.prisma.produto.findMany({
            where: {
                id: { in: ids },
            },
        });
        return produtos;
    }
}
