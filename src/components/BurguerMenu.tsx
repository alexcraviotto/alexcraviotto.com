import { getDictionary } from "@/app/dictionaries";
import { MenuIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TypingAnimation from "./magicui/typing-animation";
import { Separator } from "./ui/separator";
import { SiGit, SiGithub, SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
import { ModeToggle } from "./ModeToggle";
import "../app/globals.css"
type BurgerMenuProps = {
  params: {
    lang: any;
  };
  className?: string; 
};

export default function BurgerMenu({ params: { lang }, className }: BurgerMenuProps) {
  const dict = getDictionary(lang);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  

  return (
    <div className={className} > 
      {isOpen ? (
        <>
      
          <div className="flex flex-col transition ease-linear delay-90 items-center no-doc-scroll justify-center w-full h-screen absolute top-0 left-0 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 z-50 backdrop-blur-sm">
            <div className="top-12 left-14 absolute ">
            <ModeToggle  />

            </div>
            <XIcon
              className="h-6 w-6 cursor-pointer absolute top-14 right-14"
              onClick={() => setIsOpen(false)}
            />
            <div className="flex flex-col space-y-4 w-60">
              <p
                onClick={() => {
                    router.push("/");
                    setIsOpen(false);
                }}
                className="text-xl font-bold"
              >
                {dict.navbar.home}
              </p>
              <p
                onClick={() => {
                    router.push("/contact");
                    setIsOpen(false);
                }}
                className="text-xl font-bold"
              >
                {dict.navbar.contact}
              </p>
              <Separator />
              <div className="flex space-x-4">
              <SiX className="h-4 w-4 cursor-pointer" onClick={() => router.push("https://x.com/alexcraviotto")} />
              <SiGithub className="h-4 w-4 cursor-pointer" onClick={() => router.push("https://github.com/alexcraviotto")} />   
              <SiLinkedin className="h-4 w-4 cursor-pointer" onClick={() => router.push("https://www.linkedin.com/in/alexcraviotto")} />
                <SiInstagram className="h-4 w-4 cursor-pointer" onClick={() => router.push("https://www.instagram.com/craviottodev")} />
                <SiYoutube className="h-4 w-4 cursor-pointer" onClick={() => router.push("https://www.youtube.com/craviotto")} />    
              </div>
            
            </div>

            <div className="mt-24 w-60">
            <TypingAnimation className="opacity-50 text-left text-md" text='"Everything I do is for the 17-year-old version of myself." Virgil Abloh.' duration={35} />
        </div>
          </div>
        </>
      ) : (
        <div
          className="flex justify-center  items-center w-10 h-10 dark:bg-opacity-90 z-50 rounded-full cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-2xl font-bold">
            <MenuIcon className="opacity-80" />
          </p>
        </div>
      )}
    </div>
  );
}
