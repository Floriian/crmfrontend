import { z } from 'zod';

export const TaskSchema = z.object({
  _id: z.string(),
  title: z.string().min(1, {
    message: 'Title is required.',
  }),
  description: z.string().min(1, {
    message: 'Description is required.',
  }),
  completed: z.boolean().default(false),
  completedAt: z.date(),
  createdAt: z.date(),
});

export type TTask = z.infer<typeof TaskSchema>;
