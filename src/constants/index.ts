import { isDev } from "@/utils";

export const basePath = isDev ? "" : "/test-page";
export const UNAUTHORIZED_STATUS = 401;

export enum AsyncStatus {
  idle = "idle",
  loading = "loading",
  failed = "failed",
}
