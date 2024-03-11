import About from "@/components/About";
import HomePage from "@/components/HomePage";
import data from "@/data/landing-page.json";
export default function Home() {
    return (
        <main>
            <HomePage homePage={data.homePage} />
            <About about={data.about} />
        </main>
    );
}
