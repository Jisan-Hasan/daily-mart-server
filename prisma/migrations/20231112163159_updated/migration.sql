/*
  Warnings:

  - The values [store_keeper] on the enum `User_Role` will be removed. If these variants are still used in the database, this will fail.
  - The `gender` column on the `customers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `firstName` on the `delivery_details` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `delivery_details` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `store_keepers` table. All the data in the column will be lost.
  - The `gender` column on the `store_keepers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `carts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wishlists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `brands` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `delivery_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- AlterEnum
BEGIN;
CREATE TYPE "User_Role_new" AS ENUM ('customer', 'shop_keeper', 'admin');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "User_Role_new" USING ("role"::text::"User_Role_new");
ALTER TYPE "User_Role" RENAME TO "User_Role_old";
ALTER TYPE "User_Role_new" RENAME TO "User_Role";
DROP TYPE "User_Role_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'customer';
COMMIT;

-- AlterTable
ALTER TABLE "admins" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "contactNo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "brands" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender";

-- AlterTable
ALTER TABLE "delivery_details" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "feedbacks" ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "store_keepers" DROP COLUMN "address",
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender";

-- DropTable
DROP TABLE "carts";

-- DropTable
DROP TABLE "wishlists";

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_details" ADD CONSTRAINT "delivery_details_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_details" ADD CONSTRAINT "delivery_details_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
