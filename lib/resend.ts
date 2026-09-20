import { Resend } from "resend";
export const resend = () => new Resend(process.env.RESEND_API_KEY);
export const FROM = process.env.TICKET_FROM_EMAIL || "African Food & Drinks Festival <tickets@afrifoodnetwork.com>";
export const REPLY_TO = process.env.TICKET_REPLY_TO || "festival@afrifoodnetwork.com";
export const INBOX = process.env.FORMS_INBOX || "festival@afrifoodnetwork.com";
