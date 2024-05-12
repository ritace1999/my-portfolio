import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/home/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ritesh | Portfolio",
  description: "Created by Rit-Ace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Toaster
          position="bottom-right-corner"
          reverseOrder={false}
          toastOptions={{
            style: { background: "#183B56", color: "white" },
          }}
        />
      </body>
    </html>
  );
}
