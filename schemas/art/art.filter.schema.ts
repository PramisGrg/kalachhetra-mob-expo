import {z} from 'zod';

export const artsFilterSchema = z.object({
  search: z.string(),
  priceRange: z.array(z.string()),
  categoryId: z.array(z.string()),
  sizes: z.array(z.string()),
  shippingOption: z.string(),
  sort: z.string(),
  orderBy: z.string(),
});

export type TArtsFilterSchema = z.infer<typeof artsFilterSchema>;
