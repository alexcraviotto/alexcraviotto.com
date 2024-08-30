'use client'
import { getDictionary } from "@/app/dictionaries";
import { useEffect, useState } from "react";

export default function AwakeOrSleep({ params: { lang } } : any) {
    const dict = getDictionary(lang);
    const [time, setTime] = useState<string>("00:00:00");
    const [awake, setAwake] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            let current = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
            setTime(current.split(" ")[1]);
            if (new Date().getHours() < 6 || new Date().getHours() > 23) setAwake(false);
            else setAwake(true);
        }, 1000);

        return () => clearInterval(interval);
    }, []);




    return (
        <p className="text-black dark:text-white/70 text-sm mb-10">
          {dict.contact.awakeornot.currently}{" "}
          <span className="font-semibold text-black/80 dark:text-white/80">
            {time}
          </span>{" "}
          {dict.contact.awakeornot.timeForMe}{" "}
          <span className="font-semibold text-black/80 dark:text-white/80">
            {awake ? dict.contact.awakeornot.awake : dict.contact.awakeornot.sleeping}
          </span>
          . {dict.contact.awakeornot.soonResponse}
        </p>
      );
}