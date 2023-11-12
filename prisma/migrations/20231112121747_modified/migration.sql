/*
  Warnings:

  - The primary key for the `admins` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `admin_id` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `contact_no` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `admins` table. All the data in the column will be lost.
  - The primary key for the `brands` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brand_id` on the `brands` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `brands` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `brands` table. All the data in the column will be lost.
  - The primary key for the `carts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cart_id` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `customer_email` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `carts` table. All the data in the column will be lost.
  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `categories` table. All the data in the column will be lost.
  - The primary key for the `customers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contact_no` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `secondary_contact_no` on the `customers` table. All the data in the column will be lost.
  - The primary key for the `delivery_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `delivery_details` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `delivery_details` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_details_id` on the `delivery_details` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `delivery_details` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `delivery_details` table. All the data in the column will be lost.
  - The primary key for the `feedbacks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `customer_email` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `feedback_id` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `feedbacks` table. All the data in the column will be lost.
  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `customer_email` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `orders` table. All the data in the column will be lost.
  - The primary key for the `payments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `payment_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `payments` table. All the data in the column will be lost.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brand_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `products` table. All the data in the column will be lost.
  - The primary key for the `store_keepers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contact_no` on the `store_keepers` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `store_keepers` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `store_keepers` table. All the data in the column will be lost.
  - You are about to drop the column `secondary_contact_no` on the `store_keepers` table. All the data in the column will be lost.
  - You are about to drop the column `shop_address` on the `store_keepers` table. All the data in the column will be lost.
  - You are about to drop the column `shop_name` on the `store_keepers` table. All the data in the column will be lost.
  - You are about to drop the column `store_keeper` on the `store_keepers` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `store_keepers` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `admin_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `store_keeper_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - The primary key for the `wishlists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `wishlists` table. All the data in the column will be lost.
  - You are about to drop the column `customer_email` on the `wishlists` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `wishlists` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `wishlists` table. All the data in the column will be lost.
  - You are about to drop the column `wishlist` on the `wishlists` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shopKeeperId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[adminId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contactNo` to the `admins` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `admins` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `admins` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `brands` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `brands` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `carts` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `carts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `productId` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `carts` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `categories` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNo` to the `customers` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `customers` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `secendaryContractNo` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `delivery_details` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `delivery_details` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `orderId` to the `delivery_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `delivery_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `feedbacks` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `orders` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `orders` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `orders` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `payments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `orderId` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `products` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `products` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNo` to the `store_keepers` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `store_keepers` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `shopAddress` to the `store_keepers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopName` to the `store_keepers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `store_keepers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `users` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `shopKeeperId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `wishlists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `wishlists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `wishlists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_store_keeper_id_fkey";

-- DropIndex
DROP INDEX "users_admin_id_key";

-- DropIndex
DROP INDEX "users_customer_id_key";

-- DropIndex
DROP INDEX "users_store_keeper_id_key";

-- AlterTable
ALTER TABLE "admins" DROP CONSTRAINT "admins_pkey",
DROP COLUMN "admin_id",
DROP COLUMN "contact_no",
DROP COLUMN "created_at",
DROP COLUMN "profile_image",
DROP COLUMN "updated_at",
ADD COLUMN     "contactNo" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "admins_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "brands" DROP CONSTRAINT "brands_pkey",
DROP COLUMN "brand_id",
DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "brands_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "carts" DROP CONSTRAINT "carts_pkey",
DROP COLUMN "cart_id",
DROP COLUMN "created_at",
DROP COLUMN "customer_email",
DROP COLUMN "product_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "carts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "categories" DROP CONSTRAINT "categories_pkey",
DROP COLUMN "category_id",
DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "customers" DROP CONSTRAINT "customers_pkey",
DROP COLUMN "contact_no",
DROP COLUMN "customer_id",
DROP COLUMN "profile_image",
DROP COLUMN "secondary_contact_no",
ADD COLUMN     "contactNo" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "secendaryContractNo" TEXT NOT NULL,
ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "delivery_details" DROP CONSTRAINT "delivery_details_pkey",
DROP COLUMN "created_at",
DROP COLUMN "customer_id",
DROP COLUMN "delivery_details_id",
DROP COLUMN "order_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "delivery_details_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "feedbacks" DROP CONSTRAINT "feedbacks_pkey",
DROP COLUMN "created_at",
DROP COLUMN "customer_email",
DROP COLUMN "feedback_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "orders" DROP CONSTRAINT "orders_pkey",
DROP COLUMN "created_at",
DROP COLUMN "customer_email",
DROP COLUMN "order_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "payments" DROP CONSTRAINT "payments_pkey",
DROP COLUMN "created_at",
DROP COLUMN "order_id",
DROP COLUMN "payment_id",
DROP COLUMN "transaction_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "transactionId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "payments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
DROP COLUMN "brand_id",
DROP COLUMN "category_id",
DROP COLUMN "created_at",
DROP COLUMN "product_id",
DROP COLUMN "updated_at",
ADD COLUMN     "brandId" TEXT NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_keepers" DROP CONSTRAINT "store_keepers_pkey",
DROP COLUMN "contact_no",
DROP COLUMN "created_at",
DROP COLUMN "profile_image",
DROP COLUMN "secondary_contact_no",
DROP COLUMN "shop_address",
DROP COLUMN "shop_name",
DROP COLUMN "store_keeper",
DROP COLUMN "updated_at",
ADD COLUMN     "contactNo" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "secendaryContractNo" TEXT,
ADD COLUMN     "shopAddress" TEXT NOT NULL,
ADD COLUMN     "shopName" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "store_keepers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "admin_id",
DROP COLUMN "customer_id",
DROP COLUMN "store_keeper_id",
DROP COLUMN "user_id",
ADD COLUMN     "adminId" TEXT NOT NULL,
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "shopKeeperId" TEXT NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "wishlists" DROP CONSTRAINT "wishlists_pkey",
DROP COLUMN "created_at",
DROP COLUMN "customer_email",
DROP COLUMN "product_id",
DROP COLUMN "updated_at",
DROP COLUMN "wishlist",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "wishlists_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_customerId_key" ON "users"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "users_shopKeeperId_key" ON "users"("shopKeeperId");

-- CreateIndex
CREATE UNIQUE INDEX "users_adminId_key" ON "users"("adminId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_shopKeeperId_fkey" FOREIGN KEY ("shopKeeperId") REFERENCES "store_keepers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
