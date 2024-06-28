import { z } from "zod";

export const printerStatusSchema = z.object({
    isConnected: z.boolean(),
    error: z.string().optional()
})

export const printerTestLineSchema = z.object({
    testPrint: z.string()
})
