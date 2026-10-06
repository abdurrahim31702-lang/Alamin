export const SITE = {
  name: "Aurelis Dental",
  wordmark: "Aurelis",
  tagline: "The Art of Your Smile.",
  location: "Mumbai, India",
  demoNotice: "Demo website — not a real clinic.",
  email: "studio@aurelis.demo",
  phone: "+91 22 0000 0000",
  address: "Bandra West, Mumbai 400050",
  hours: "By private appointment",
} as const;

export const NAV = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#treatments", label: "Treatments" },
  { href: "#gallery", label: "Smile Gallery" },
  { href: "#technology", label: "Technology" },
  { href: "#about", label: "About" },
] as const;

export const TREATMENTS = [
  {
    id: "smile-makeover",
    num: "01",
    name: "Smile Makeover",
    kicker: "Composition",
    copy: "A considered redesign of proportion, brightness and facial harmony — planned as a single composition, never a collection of procedures.",
    image: "/images/smile-editorial.jpg",
    alt: "Editorial close crop of a refined smile, used as campaign imagery for this demo",
  },
  {
    id: "veneers",
    num: "02",
    name: "Porcelain Veneers",
    kicker: "Ceramic",
    copy: "Ultra-thin ceramic shells, designed tooth by tooth, to refine light, edge and symmetry while remaining quietly natural.",
    image: "/images/veneers-still.jpg",
    alt: "Still life of porcelain veneers arranged like jewelry on dark stone",
  },
  {
    id: "aligners",
    num: "03",
    name: "Clear Aligners",
    kicker: "Movement",
    copy: "Discreet, digitally planned tooth movement. An alternative to traditional orthodontics, paced for life rather than spectacle.",
    image: "/images/aligner-product.jpg",
    alt: "Clear aligner photographed as a luxury object on champagne silk",
  },
  {
    id: "whitening",
    num: "04",
    name: "Professional Whitening",
    kicker: "Light",
    copy: "Controlled brightening that respects enamel character. The aim is luminosity, not a flat, artificial white.",
    image: "/images/enamel-macro.jpg",
    alt: "Macro photograph of light moving across a porcelain surface",
  },
  {
    id: "implants",
    num: "05",
    name: "Dental Implants",
    kicker: "Structure",
    copy: "Quiet structural restoration. Planned in three dimensions so the visible result sits in balance with the face.",
    image: "/images/tech-scan.jpg",
    alt: "Dark studio with a champagne wireframe study of a dental arch",
  },
  {
    id: "rehabilitation",
    num: "06",
    name: "Full-Mouth Rehabilitation",
    kicker: "Architecture",
    copy: "A complete recalibration of form, bite and appearance — approached as architecture: sequence, structure, then finish.",
    image: "/images/philosophy-interior.jpg",
    alt: "Sunlit limestone interior of the fictional Aurelis studio",
  },
] as const;

export const CASES = [
  {
    num: "01",
    title: "Smile Makeover",
    image: "/images/smile-editorial.jpg",
    alt: "Demo composite of a refined smile used for a fictional case study",
    rationale:
      "Refining proportion, symmetry and brightness while preserving a natural expression.",
  },
  {
    num: "02",
    title: "Porcelain Veneers",
    image: "/images/veneers-still.jpg",
    alt: "Demo still life representing a fictional veneer study",
    rationale:
      "Thin ceramic, considered edge for edge, to restore light without theatrical opacity.",
  },
  {
    num: "03",
    title: "Clear Aligners",
    image: "/images/aligner-product.jpg",
    alt: "Demo product study representing a fictional alignment case",
    rationale:
      "Quiet movement, digitally rehearsed, so the final composition feels as if it was always there.",
  },
  {
    num: "04",
    title: "Light & Enamel",
    image: "/images/enamel-macro.jpg",
    alt: "Demo macro study of enamel-like porcelain and light",
    rationale:
      "Brightness treated as a material quality — warmth, translucency, and restraint.",
  },
] as const;

export const TECH = [
  {
    num: "01",
    name: "Digital Smile Design",
    copy: "Proportion studied against the face, not in isolation. A visual rehearsal before anything is committed.",
  },
  {
    num: "02",
    name: "3D Scanning",
    copy: "Surface captured at high resolution — a precise record, without the theatre of conventional impressions.",
  },
  {
    num: "03",
    name: "Digital Treatment Planning",
    copy: "Every sequence modelled in advance, so chairside time is calm, short, and exact.",
  },
  {
    num: "04",
    name: "High-Precision Imaging",
    copy: "Imaging used as a design instrument: bone, soft tissue, and the architecture of the smile.",
  },
  {
    num: "05",
    name: "Minimally Invasive Techniques",
    copy: "Where possible, subtract less. Preserve what is already in harmony; refine only what is not.",
  },
] as const;

export const EXPERIENCE_STEPS = [
  {
    num: "01",
    title: "Private consultation",
    copy: "A quiet first conversation. Photographs, proportion, and intention — not a sales floor. You are seen, not processed.",
    image: "/images/philosophy-interior.jpg",
    alt: "Sunlit consultation interior of the fictional studio",
  },
  {
    num: "02",
    title: "Digital smile analysis",
    copy: "The face is recorded in three dimensions. We study midlines, incisal edges, and how light meets enamel.",
    image: "/images/tech-scan.jpg",
    alt: "Abstract digital smile analysis visualization",
  },
  {
    num: "03",
    title: "Personalized treatment design",
    copy: "A design, not a menu. Materials, sequence and finish are specified with the same care as a bespoke atelier.",
    image: "/images/veneers-still.jpg",
    alt: "Porcelain studies arranged as a design composition",
  },
  {
    num: "04",
    title: "Precision treatment",
    copy: "Calm rooms. Measured time. Technology in service of a still hand — never the other way around.",
    image: "/images/hero-porcelain.jpg",
    alt: "A single porcelain veneer in studio light",
  },
  {
    num: "05",
    title: "Refined final result",
    copy: "The work should recede. What remains is a face in proportion, and a smile that does not announce itself.",
    image: "/images/smile-editorial.jpg",
    alt: "Editorial beauty crop used as a demo of a refined result",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The process felt closer to a private atelier than a clinic. Every decision was about proportion, not spectacle.",
    attrib: "A. S., Mumbai",
  },
  {
    quote:
      "I was not asked to want a brighter smile. I was asked what the rest of my face should still say.",
    attrib: "R. M., Delhi",
  },
  {
    quote:
      "Quiet rooms, exact language, no theatre. It is the first time dentistry has felt like design.",
    attrib: "N. K., Bengaluru",
  },
] as const;
