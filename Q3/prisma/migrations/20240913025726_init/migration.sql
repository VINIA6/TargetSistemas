-- CreateTable
CREATE TABLE "Faturamento" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Faturamento_pkey" PRIMARY KEY ("id")
);
