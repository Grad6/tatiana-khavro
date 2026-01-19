import Hero from "../components/homePage/hero/Hero";
import Services from "../components/homePage/services/Services";
import SignUp from "../components/homePage/signup/SignUp";
import Bonus from "../components/homePage/bonus/Bonus";

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden relative min-h-screen">
      <Hero />
      <Services />
      <Bonus />
      <SignUp />
    </main>
  );
}
