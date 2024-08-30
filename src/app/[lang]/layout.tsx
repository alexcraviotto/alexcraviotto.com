import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { getDictionary, Locale } from "../dictionaries";
import { Toaster } from "@/components/ui/toaster";
import TransitionWrapper from "@/components/TransitionWrapper";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};



export default async function RootLayout({
  children, params
}: Props) {
  const dict = getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <title>{dict.seo.title}</title>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="robots" content="follow, index" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content={dict.seo.title} />
      <meta name="og:description" content={dict.seo.description} />
      <meta name="og:title" content={dict.seo.title} />
      <meta name="og:image" content="/images/barcode.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alexcraviotto" />
      <meta name="twitter:title" content={dict.seo.title} />
      <meta name="twitter:description" content={dict.seo.description} />
      <meta name="twitter:image" content="/images/barcode.png" />
      <meta name="twitter:creator" content="@alexcraviotto" />
      <meta name="description" content={dict.seo.description} />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <div className="flex flex-col items-center max-w-3xl container mx-auto p-8 h-full min-h-screen
          text-black dark:text-[color:var(--foreground)] 
            bg-gradient-to-bl from-white to-white dark:from-[color:var(--background)] dark:to-[color:var(--card)]">
            <Navbar lang={params.lang} />
            <Toaster />
            <TransitionWrapper >
            {children}

            </TransitionWrapper>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
