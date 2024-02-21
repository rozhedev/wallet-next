// * Reexport with type assertion, for prevent typisation errors.
// * e.g: "string | undefined" with "string"

export const NEXT_PUBLIC_TG_BOT_TOKEN: string = process.env.NEXT_PUBLIC_TG_BOT_TOKEN as string;

export const NEXT_PUBLIC_TEAM_LOG_CHANNEL: string = process.env.NEXT_PUBLIC_TEAM_LOG_CHANNEL as string;

export const NEXT_PUBLIC_ADMIN_LOG_CHANNEL: string = process.env.NEXT_PUBLIC_ADMIN_LOG_CHANNEL as string;

export const NEXT_PUBLIC_APIFY_LINK: string = process.env.NEXT_PUBLIC_APIFY_LINK as string;
