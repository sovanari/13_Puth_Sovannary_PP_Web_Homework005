import "./globals.css";

export const metadata = {
  title: "Shop Dashboard",
  description: "Next.js beginner practice project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
