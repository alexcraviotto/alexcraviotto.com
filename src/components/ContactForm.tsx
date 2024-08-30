"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { getDictionary } from "@/app/dictionaries"
import sendDiscordWebhook from "@/app/actions/send"
import { Textarea } from "./ui/textarea"


export default function ContactForm({ params: { lang } }: any) {
    const dict = getDictionary(lang);
    const FormSchema = z.object({
        email: z
            .string()
            .email({ message: `${dict.contact.form.error.email}` }),
        content: z
            .string()
            .min(10, { message: `${dict.contact.form.error.content}` }),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {

        toast({
            title: `${dict.contact.form.toast.success}`
        })
        sendDiscordWebhook(data)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder={dict.contact.form.emailPlaceholder} {...field} />
                            </FormControl>
                            <FormDescription>
                                {dict.contact.form.emailAditionalInfo}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{dict.contact.form.contentTitle}</FormLabel>
                            <FormControl>
                                <Textarea placeholder={dict.contact.form.contentPlaceholder} {...field} />
                            </FormControl>
                            <FormDescription>
                                {dict.contact.form.contentAditionalInfo}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full md:w-auto">{dict.contact.form.submit}</Button>
            </form>
        </Form>
    )
}
