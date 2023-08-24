import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "components/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});

export const searchEngineRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        query: input.text,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
