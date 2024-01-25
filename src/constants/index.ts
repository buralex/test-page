import { isDevelopment } from "@/utils";

export const basePath = isDevelopment ? "" : "test-page";
export const UNAUTHORIZED_STATUS = 401;

export enum AsyncStatus {
  idle = "idle",
  loading = "loading",
  failed = "failed",
}
