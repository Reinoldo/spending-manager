/*
  Warnings:

  - You are about to drop the column `createdAt` on the `spendings` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `spendings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `spendings` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `when` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
