import { z } from "zod";
import { printerStatusSchema, printerTestLineSchema } from "./schema";

export type PrinterStatus = z.infer<typeof printerStatusSchema>
export type PrinterTestLine = z.infer<typeof printerTestLineSchema>
