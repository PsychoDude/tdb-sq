-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "info" TEXT,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rendezvous" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rendezvous_pkey" PRIMARY KEY ("id")
);
