import { z } from 'zod';

const envSchema = z.object({
  DB_HOST: z.string(),
  DB_PASS: z.string(),
  DB: z.string(),
  DB_USER: z.string(),
  DB_PORT: z.coerce.number(),
  JWT_SECRET: z.string(),
});

export type EnvConfig = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>): EnvConfig {
  const parsed = envSchema.safeParse(config);
  if (!parsed.success) {
    throw new Error(
      `Invalid environment variables: ${JSON.stringify(z.treeifyError(parsed.error))}`,
    );
  }
  return parsed.data;
}
