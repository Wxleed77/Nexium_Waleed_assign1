// internship/assignment-1/app/layout.tsx

import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google"; // Import Playfair_Display

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); // Keep inter
const playfairDisplay = Playfair_Display({ // Add Playfair Display configuration
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Specify weights you want to use
  variable: "--font-playfair-display", // Define a CSS variable name for it
  display: "swap", // Improves font loading performance
});

export const metadata = {
  title: "Quote Generator", // You can change this to "Inspiration Hub" if you like
  description: "Generate motivational quotes on various topics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the font variables to the html tag */}
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}