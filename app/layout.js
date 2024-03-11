import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Goolluck Investments",
    description: "A Stock Market Institute",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow px-5 lg:px-10">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
