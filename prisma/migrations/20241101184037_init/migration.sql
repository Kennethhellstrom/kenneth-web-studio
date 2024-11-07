-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "servicos_interesse" TEXT[],
    "possui_fotos" BOOLEAN NOT NULL,
    "incluir_no_orcamento" BOOLEAN,
    "possui_site" BOOLEAN NOT NULL,
    "endereco_site" TEXT,
    "descricao" TEXT NOT NULL,
    "receber_novidades" BOOLEAN NOT NULL DEFAULT false,
    "data_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
