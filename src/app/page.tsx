import Image from "next/image";
import { Button } from '@heroui/react';
import HeroSection from "@/components/HomeLayout/HeroSection";
import LiveMatchesCanvas from "@/components/HomeLayout/LiveMatchesCanvas";
export default function Home() {
  return (
   <main >
        <HeroSection/>
        <LiveMatchesCanvas/>
      </main>
  );
}
