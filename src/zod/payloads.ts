import * as z from "zod";

export const RegisterPayload = z.object({
  userName: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
});
