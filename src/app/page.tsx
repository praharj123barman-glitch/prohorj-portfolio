import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Work />
      <Services />
      <TechStack />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
