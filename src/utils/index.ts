export const isDevelopment = process.env.NODE_ENV === "development";

export const cssClasses = (classes: (string | null | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const getIsServer = () => typeof window === "undefined";
