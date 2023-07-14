/*
  Warnings:

  - You are about to drop the column `endDateTime` on the `Requests` table. All the data in the column will be lost.
  - You are about to drop the column `startDateTime` on the `Requests` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Requests" DROP COLUMN "endDateTime",
DROP COLUMN "startDateTime";
