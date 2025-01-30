import { z } from 'zod';

export const calcDeliverySchema = z.object({
  package: z.object({
    name: z.string(),
    weight: z.string(),
    length: z.string(),
    width: z.string(),
    height: z.string()
  }),
  senderPoint: z.string(),
  receiverPoint: z.string()
});

export type CalcDeliverySchema = z.infer<typeof calcDeliverySchema>;
