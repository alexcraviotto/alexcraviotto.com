import { getDictionary } from "@/app/dictionaries";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectCTA({ params: { lang } }: any) {
    const dict = getDictionary(lang);

    return (
        <div className="w-full flex justify-center bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
            <div className="max-w-3xl w-full px-12 lg:px-3 py-3">
                <div className="flex items-center justify-between gap-6">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            {dict.cta.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 hidden sm:block">
                            {dict.cta.subtitle}
                        </p>
                    </div>
                    <Link href={`/${lang}/contact`}>
                        <Button variant="ghost" size="sm" className="whitespace-nowrap hover:bg-white/10">
                            {dict.cta.button} →
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
