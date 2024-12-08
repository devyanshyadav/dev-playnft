import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Unbounded } from "next/font/google";
import Header from "@/components/global-cmp/header";
import Footer from "@/components/global-cmp/footer";
import SmoothScrolling from "@/components/global-cmp/smooth-scrolling";
import IntroSection from "@/components/global-cmp/intro-section";

const unBounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "200", "300", "100"],
});

export const metadata: Metadata = {
  title: "Play NFT",
  description: "Discover, Collect and Sell Dope Art and NFTs",
};


export default function RootLayout({
  children,
  videomodal
}: Readonly<{
  children: React.ReactNode;
  videomodal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${unBounded.variable} ${poppins.variable}  font-poppins  overflow-x-hidden   antialiased w-screen bg-[#060319] text-white`}
      >
        <IntroSection/>
        <Header />
        <SmoothScrolling>
          <main className=" space-y-[4rem] *:relative *:max-w-7xl w-full overflow-x-hidden  *:mx-auto *:w-full">
            {videomodal}
            {children}
          </main>
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
