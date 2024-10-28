export const metadata = {
  title: "Yahweh Software Solutions",
  description: "Web Development | App Development | EV Mobility ",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import RevolvingIcons from "@/components/revolvingIcons";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <RevolvingIcons />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
      
    </>
  );
}
