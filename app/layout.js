import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
    title: "Goolluck Investments",
    description: "A Stock Market Institute",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">{children}</main>
            </body>
        </html>
    );
}
