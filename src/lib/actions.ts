"use server";

import EmailTemplate from "@/components/contact-email-template";
import { Resend } from "resend";

export const sendEmail = async (email: string, message: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Dev <message@ogoren.dev>",
    to: ["orrgorenn@gmail.com"],
    subject: "New Website Message!",
    react: EmailTemplate({ email, message }),
  });

  if (error) {
    console.error(error);
    throw error;
  }

  console.log(data);
  return { status: "success" };
};
