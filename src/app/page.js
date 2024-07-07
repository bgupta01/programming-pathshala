import Image from "next/image";
import Navbar from "./pages/navbar";
import Clients from "./pages/clients";
import Services from "./pages/services";
import HeroService from "./pages/heroservice";
import StatsCard from "./pages/StatsCard";
import content from "./heroServicejson.json";
import MainComponent from "./pages/MainComponent";
import HeroService2 from "./pages/heroservice2";

export default function Home() {
  console.log('Content:', content);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    <div>
    <Navbar />
    <Clients />
    <Services />
    <HeroService />
    <StatsCard />
    <HeroService2 />
  </div>
  );
}
