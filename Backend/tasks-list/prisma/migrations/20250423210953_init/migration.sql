-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
