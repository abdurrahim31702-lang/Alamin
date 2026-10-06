import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies } from "@/components/aurelis/CaseStudies";
import { Contact } from "@/components/aurelis/Contact";
import { Doctor } from "@/components/aurelis/Doctor";
import { Experience } from "@/components/aurelis/Experience";
import { FinalCta } from "@/components/aurelis/FinalCta";
import { Hero } from "@/components/aurelis/Hero";
import { PageShell } from "@/components/aurelis/PageShell";
import { Philosophy } from "@/components/aurelis/Philosophy";
import { Technology } from "@/components/aurelis/Technology";
import { Testimonials } from "@/components/aurelis/Testimonials";
import { ThreeDExperience } from "@/components/aurelis/ThreeDExperience";
import { Treatments } from "@/components/aurelis/Treatments";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aurelis Dental — The Art of Your Smile" },
      {
        name: "description",
        content:
          "Aurelis Dental is a fictional premium cosmetic dentistry studio in India. An editorial demo of smile design, porcelain veneers, and facially harmonious dentistry. Not a real clinic.",
      },
    ],
  }),
});

function Home() {
  return (
    <PageShell>
      <main id="main">
        <Hero />
        <Philosophy />
        <Treatments />
        <ThreeDExperience />
        <CaseStudies />
        <Technology />
        <Doctor />
        <Experience />
        <Testimonials />
        <Contact />
        <FinalCta />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Aurelis Dental",
            description:
              "Fictional premium cosmetic dentistry studio demo website. Not a real clinic.",
            about: "Demo / fictional brand experience",
          }),
        }}
      />
    </PageShell>
  );
}
