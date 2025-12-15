import { Rubik } from "next/font/google";
import "./globals.css";

const rubix = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Create Next App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubix.className} antialiased`}>{children}</body>
    </html>
  );
}
