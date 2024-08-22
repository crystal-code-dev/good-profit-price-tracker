-- CreateTable
CREATE TABLE "Product" (
    "idProductPk" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("idProductPk")
);

-- CreateTable
CREATE TABLE "ProductPriceHistory" (
    "idProductPriceHistoryPk" TEXT NOT NULL,
    "idPriceHistorySourceFk" TEXT NOT NULL,
    "idProductFk" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductPriceHistory_pkey" PRIMARY KEY ("idProductPriceHistoryPk")
);

-- CreateTable
CREATE TABLE "PriceHistorySource" (
    "idPriceHistorySourcePk" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceHistorySource_pkey" PRIMARY KEY ("idPriceHistorySourcePk")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_identifier_key" ON "Product"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "PriceHistorySource_identifier_key" ON "PriceHistorySource"("identifier");

-- AddForeignKey
ALTER TABLE "ProductPriceHistory" ADD CONSTRAINT "ProductPriceHistory_idProductFk_fkey" FOREIGN KEY ("idProductFk") REFERENCES "Product"("idProductPk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPriceHistory" ADD CONSTRAINT "ProductPriceHistory_idPriceHistorySourceFk_fkey" FOREIGN KEY ("idPriceHistorySourceFk") REFERENCES "PriceHistorySource"("idPriceHistorySourcePk") ON DELETE RESTRICT ON UPDATE CASCADE;
