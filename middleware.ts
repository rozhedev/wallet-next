export { default } from "next-auth/middleware";

// * List of private routes. Use string in array matcher - only correct variant. Don't use, variables, spread, etc.
export const config = { matcher: ["/dashboard", "/assets_cab", "/history", "/settings"] };
