import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// See: https://www.youtube.com/watch?v=re2JFITR7TI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
