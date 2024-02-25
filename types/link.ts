export type TLink = {
  target: string;
  expiresMin: number;
  ts: number;
  password: string;
  id: string;
};
export type TNewLink = Omit<TLink, "id" | "ts" | "expiresMin" | "password"> & {
  expiresMin?: number;
  password?: string;
  ts?: number;
};
export type TLinkFs = Omit<TLink, "password" | "expiresMin">;
