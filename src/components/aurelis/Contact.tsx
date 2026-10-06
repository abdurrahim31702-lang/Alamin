import { SITE } from "@/lib/content";
import { useBooking } from "@/lib/booking-store";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function Contact() {
  const { openWith } = useBooking();

  return (
    <section id="contact" className="relative bg-ink text-ivory">
      <div className="shell grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-5">
          <p className="micro text-champagne">Location · India</p>
          <h2 className="mt-5 font-serif text-headline">
            Your smile,
            <br />
            considered.
          </h2>
          <p className="mt-8 max-w-sm text-body font-light text-mist">
            A private studio in Mumbai, imagined for this demonstration. Appointments are by
            enquiry — in a real practice, they would be unhurried and few.
          </p>
          <dl className="mt-12 space-y-6">
            <div>
              <dt className="micro text-gold">Studio</dt>
              <dd className="mt-2 text-lg font-light">
                {SITE.address}
                <br />
                {SITE.location}
              </dd>
            </div>
            <div>
              <dt className="micro text-gold">Contact</dt>
              <dd className="mt-2 text-lg font-light">
                {SITE.email}
                <br />
                {SITE.phone}
              </dd>
            </div>
            <div>
              <dt className="micro text-gold">Hours</dt>
              <dd className="mt-2 text-lg font-light">{SITE.hours}</dd>
            </div>
          </dl>
          <Button className="mt-12" magnetic arrow onClick={() => openWith()}>
            Request a private consultation
          </Button>
          <p className="micro mt-6 text-mist/70">{SITE.demoNotice}</p>
        </Reveal>
        <Reveal className="md:col-span-7" delay={100}>
          <figure>
            <img
              src="/images/clinic-facade.jpg"
              alt="Night facade of the fictional Aurelis studio in Mumbai"
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-ivory/10"
            />
            <figcaption className="mt-4 flex justify-between">
              <span className="micro text-mist">Mumbai · India</span>
              <span className="micro text-champagne">Demo location</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
