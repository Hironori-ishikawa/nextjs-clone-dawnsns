import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SupabaseListener from './components/supabase-listener'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supabase Auth",
  description: "Supabase Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">

          <SupabaseListener />
          <main className="flex-1 container max-w-screen-sm mx-auto px-1 py-5">{children}</main>

          <footer>
            <div className="text-center text-sm">
              Clone Dawn SNS @ H.R.I H.I Portfolio
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
