import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "welth",
  name: "Welth",
  retryFunction: async (attempt: number) => {
    return {
      delay: Math.pow(2, attempt) * 1000,
      maxAttempts: 5,
    };
  },
});
