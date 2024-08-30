'use client'
import { getDictionary, Locale } from "@/app/dictionaries";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { SiX, SiGithub, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import BurgerMenu from "./BurguerMenu";
import SpotifyListeningCard from "./SpotifyListeningCard";

export default function Navbar({ lang }: { lang: Locale }) {
    const pathname = usePathname();
    const dict = getDictionary(lang);
    const router = useRouter();

    return (
        <><SpotifyListeningCard params={{lang}} /><div className="flex justify-between items-center w-full p-4 cursor-pointer">
            <p onClick={() => router.push("/")} className="font-bold opacity-75 items-center justify-center flex lg:hidden">craviotto.</p>

            <div className="hidden lg:flex items-center justify-center space-x-4">
                <ModeToggle />
                <p onClick={() => router.push("/")} className={`mr-4 ${pathname === `/${lang}` ? 'font-bold' : ''}`}>{dict.navbar.home}</p>
                <p onClick={() => router.push("/contact")} className={`mr-4 ${pathname === `/${lang}/contact` ? 'font-bold' : ''}`}>{dict.navbar.contact}</p>
            </div>
            <div className="flex items-center justify-end">
                <BurgerMenu params={{ lang }} className="flex lg:hidden" />

                <div className="hidden lg:flex items-center space-x-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger onClick={() => router.push("https://x.com/craviottoalex")}>
                                <SiX className="h-4 w-4 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>X</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger onClick={() => router.push("https://github.com/alexcraviotto")}>
                                <SiGithub className="h-4 w-4 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Github</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger onClick={() => router.push("https://www.linkedin.com/in/alexcraviotto")}>
                                <SiLinkedin className="h-4 w-4 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Linkedin</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger onClick={() => router.push("https://www.instagram.com/craviottodev")}>
                                <SiInstagram className="h-4 w-4 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Instagram</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger onClick={() => router.push("https://www.youtube.com/craviotto")}>
                                <SiYoutube className="h-4 w-4 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Youtube</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div></>
    );
}
