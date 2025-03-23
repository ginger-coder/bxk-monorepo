import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并类名工具函数
 * 结合了clsx和tailwind-merge的功能，可以智能地合并多个类名
 * 包括条件类名和解决Tailwind类名冲突
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}