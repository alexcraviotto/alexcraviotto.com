'use client'
import { getDictionary } from "@/app/dictionaries";
import AwakeOrSleep from "@/components/AwakeOrSleep";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Contact({ params: { lang } }: any) {
    const dict = getDictionary(lang);
    return (
        <motion.div initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }} className="space-y-4 lg:space-y-15 mt-12 flex flex-col p-4 md:p-0">
            <h3 className="font-bold text-3xl tracking-tight">{dict.contact.title} 💬</h3>
            <p className="opacity-80 tracking-tight">{dict.contact.subtitle}</p>
            <AwakeOrSleep params={{ lang }} />
            <ContactForm params={{ lang }} />
        </motion.div>

    );
}
