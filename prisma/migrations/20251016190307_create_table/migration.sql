-- CreateTable
CREATE TABLE "public"."Produto" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,
    "estoque" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pedidos" (
    "id" SERIAL NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "data_pedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Itens_Pedidos" (
    "id" SERIAL NOT NULL,
    "produto_Id" INTEGER NOT NULL,
    "pedidos_Id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco_Unitario" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Itens_Pedidos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Itens_Pedidos" ADD CONSTRAINT "Itens_Pedidos_pedidos_Id_fkey" FOREIGN KEY ("pedidos_Id") REFERENCES "public"."Pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Itens_Pedidos" ADD CONSTRAINT "Itens_Pedidos_produto_Id_fkey" FOREIGN KEY ("produto_Id") REFERENCES "public"."Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
