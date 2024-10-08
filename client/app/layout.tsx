import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GeistSans } from "geist/font/sans";
import { UserContextProvider } from "@/contexts/UserContextProvider";

export const metadata: Metadata = {
  title: "ExpTrack",
  description: "Powerful finance tracker",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} antialiased dark:bg-gray-950`}>
      <body>
        <main className="flex w-full">
          <UserContextProvider>
            <Navbar />
            <section className="w-full px-[20px] py-[38px] flex flex-col gap-[20px]">
              {children}
            </section>
          </UserContextProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
