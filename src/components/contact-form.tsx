"use client";

import { sendEmail } from "@/lib/actions";
import { useModal } from "@/providers/modal-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  email: z.string().min(2).max(200),
  message: z.string(),
});

export default function ContactForm() {
  const { setClose } = useModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await sendEmail(values.email, values.message);
      if (res.status === "success") {
        setClose();
        toast.success("Message was sent successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error while trying to send message - Orr was notified.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@doe.com"
                  {...field}
                  className="text-gray-900"
                />
              </FormControl>
              <FormDescription>
                I will not spam you. pinky promise.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Here you can type your message..."
                  rows={5}
                  className="text-gray-900"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          className="h-12 rounded-xl border border-gray-900 bg-gray-900"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </Form>
  );
}
