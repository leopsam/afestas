/*
  Warnings:

  - You are about to drop the column `userId` on the `Depositions` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Gallery` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `ServiceType` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Theme` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Theme` table. All the data in the column will be lost.
  - Added the required column `name` to the `Depositions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Gallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Gallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `ServiceType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Theme` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Depositions" DROP CONSTRAINT "Depositions_userId_fkey";

-- DropForeignKey
ALTER TABLE "Gallery" DROP CONSTRAINT "Gallery_userId_fkey";

-- AlterTable
ALTER TABLE "Depositions" DROP COLUMN "userId",
ADD COLUMN     "name" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "userId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "ServiceType" DROP COLUMN "price",
ADD COLUMN     "photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Theme" DROP COLUMN "description",
DROP COLUMN "price",
ADD COLUMN     "category" VARCHAR(100) NOT NULL;
