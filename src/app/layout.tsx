import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Alex Craviotto</title>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content="Software Engineer @ HeyGen" />
        <meta name="og:title" content="Alex Craviotto" />
        <meta name="og:description" content="Software Engineer @ HeyGen" />
        <meta name="og:image" content="/images/barcode.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alexcraviotto" />
        <meta name="twitter:creator" content="@alexcraviotto" />
      </head>
      <body className={`${courierPrime.className} bg-white text-black`}>
        <div className="min-h-screen flex items-center justify-center">
          {children}
        </div>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
