-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_adminId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_customerId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_shopKeeperId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "adminId" DROP NOT NULL,
ALTER COLUMN "customerId" DROP NOT NULL,
ALTER COLUMN "shopKeeperId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_shopKeeperId_fkey" FOREIGN KEY ("shopKeeperId") REFERENCES "store_keepers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;
