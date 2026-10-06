import { Reveal } from "./Reveal";

export function Doctor() {
  return (
    <section id="about" className="relative bg-ivory text-ink">
      <div className="shell grid items-end gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-7">
          <figure>
            <img
              src="/images/doctor-portrait.jpg"
              alt="Editorial portrait of Dr. Aria Mehta, a fictional practitioner created for this demo"
              loading="lazy"
              decoding="async"
              className="aspect-3/4 w-full object-cover object-top outline outline-1 -outline-offset-1 outline-ink/10"
            />
            <figcaption className="mt-4 micro text-stone">Demo practitioner · not a real clinician</figcaption>
          </figure>
        </Reveal>
        <Reveal className="md:col-span-5 md:pb-8" delay={100}>
          <p className="micro text-gold-deep">The doctor · 07</p>
          <h2 className="mt-5 font-serif text-headline">Dr. Aria Mehta</h2>
          <p className="micro mt-4 text-stone">Cosmetic & restorative dentist</p>
          <p className="mt-8 text-body font-light text-stone">
            A fictional portrait, written for this studio demonstration. No degrees, awards or
            hospital affiliations are claimed. The figure exists to show how a private practice
            might speak — calmly, precisely, and without spectacle.
          </p>
          <p className="mt-6 text-body font-light text-stone">
            In a real atelier the biography would be shorter than the work. Here, the work is
            imagined; the standard remains: facial harmony, ceramic that holds light, and rooms
            that do not hurry you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
