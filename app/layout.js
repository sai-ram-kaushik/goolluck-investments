import "./globals.css";

export const metadata = {
  title: "Goolluck Investments",
  description: "A Stock Market Institute",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
