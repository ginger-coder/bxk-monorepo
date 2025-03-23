import { greet } from "@bianxk/package-a";
export function welcomeUser(name: string): string {
  const greeting = greet(name);
  return `${greeting} Welcome to our platform. --by bianxk --`;
}
