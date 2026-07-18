import type { Metadata } from "next";
import "./globals.css";
import "./extra.css";
import "./isee.css";
import "./isee-image.css";
import "./pricing.css";
export const metadata: Metadata={title:"Azri-L Labs — Audio Technology",description:"Independent audio plugins and tools for modern music creators."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
