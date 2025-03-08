import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Create a new ticket",
    content: "This is a new ticket",
    status: "OPEN" as const,
  },
  {
    title: "Update the ticket",
    content: "This is an updated ticket",
    status: "DONE" as const,
  },
  {
    title: "Delete the ticket",
    content: "This is a deleted ticket",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
