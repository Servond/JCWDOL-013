/*
  Warnings:

  - You are about to drop the column `name` on the `branch` table. All the data in the column will be lost.
  - Added the required column `branchName` to the `Branch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `branch` rename column `name` to `branchName`;

