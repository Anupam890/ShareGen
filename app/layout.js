import { Inter,Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "ShareGen - Share your Files with ease",
  description: "A simple file sharing service ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
        {children}
        </body>
    </html>
  );
}
