export const products = [
  {
    id: 1,
    name: "Aurora Wave Mirror",
    slug: "aurora-wave-mirror",
    price: 4999,
    salePrice: 3499,
    images: ["/images/product-wavy-mirror.png", "/images/product-led-mirror.png"],
    category: "Wall Mirrors",
    badge: "Sale",
    description: "An organic, flowing wavy-shaped mirror that brings movement and artistry to any wall. The frameless design with beveled edges catches light beautifully, creating an ever-changing display of reflections.",
    sizes: ["Small (30x40cm)", "Medium (45x60cm)", "Large (60x80cm)"],
    details: {
      material: "Premium float glass with beveled edges",
      mounting: "D-ring hardware included",
      weight: "3.2 kg (Medium)",
      care: "Clean with a soft, lint-free cloth"
    }
  },
  {
    id: 2,
    name: "Halo LED Mirror",
    slug: "halo-led-mirror",
    price: 6999,
    salePrice: null,
    images: ["/images/product-led-mirror.png", "/images/product-vanity-mirror.png"],
    category: "LED Mirrors",
    badge: "New",
    description: "A stunning round mirror with integrated LED backlighting that creates a warm, ambient glow. The brushed gold rim adds a touch of luxury to your bathroom or vanity setup.",
    sizes: ["60cm Diameter", "80cm Diameter", "100cm Diameter"],
    details: {
      material: "Anti-fog glass with LED strip",
      mounting: "Wall mount with concealed bracket",
      weight: "5.5 kg (80cm)",
      care: "Wipe with damp cloth, avoid abrasive cleaners"
    }
  },
  {
    id: 3,
    name: "Celestial Arch Mirror",
    slug: "celestial-arch-mirror",
    price: 8999,
    salePrice: 6999,
    images: ["/images/product-arch-mirror.png", "/images/hero-banner.png"],
    category: "Wall Mirrors",
    badge: "Sale",
    description: "An elegant floor-length arch mirror with a thin gold metal frame. Makes any room feel larger and more luxurious. Perfect as a statement piece in bedrooms, hallways, or dressing rooms.",
    sizes: ["150x50cm", "180x60cm"],
    details: {
      material: "Float glass with powder-coated steel frame",
      mounting: "Wall lean or wall mount",
      weight: "12 kg (180cm)",
      care: "Dust frame regularly, clean glass with mirror cleaner"
    }
  },
  {
    id: 4,
    name: "Noir Hexagon Mirror",
    slug: "noir-hexagon-mirror",
    price: 3999,
    salePrice: null,
    images: ["/images/product-hexagon-mirror.png", "/images/product-wavy-mirror.png"],
    category: "Decorative",
    badge: null,
    description: "A modern geometric hexagonal mirror with a matte black frame. Create stunning wall arrangements by combining multiple units, or let a single piece stand as a bold minimalist accent.",
    sizes: ["30cm", "45cm", "Set of 3 (30cm)"],
    details: {
      material: "Glass with matte black metal frame",
      mounting: "Keyhole hanging",
      weight: "1.8 kg (45cm)",
      care: "Wipe with soft cloth"
    }
  },
  {
    id: 5,
    name: "Soleil Sunburst Mirror",
    slug: "soleil-sunburst-mirror",
    price: 7499,
    salePrice: 5999,
    images: ["/images/product-sunburst-mirror.png", "/images/product-arch-mirror.png"],
    category: "Decorative",
    badge: "Sale",
    description: "A show-stopping sunburst mirror with radiating gold metal rays. Art deco inspired design that commands attention and serves as the focal point of any living space.",
    sizes: ["70cm Diameter", "90cm Diameter"],
    details: {
      material: "Glass center with hand-finished metal rays",
      mounting: "Heavy-duty wall mount included",
      weight: "4.5 kg (70cm)",
      care: "Dust with soft brush, polish metal with dry cloth"
    }
  },
  {
    id: 6,
    name: "Custom Neon Mirror",
    slug: "custom-neon-mirror",
    price: 9999,
    salePrice: null,
    images: ["/images/product-neon-mirror.png", "/images/product-led-mirror.png"],
    category: "Custom Mirrors",
    badge: "Custom",
    description: "Design your own mirror with integrated LED neon lighting. Choose your shape, size, color, and text. Perfect for cafés, gaming setups, salons, and personal spaces that demand personality.",
    sizes: ["Custom — Contact Us"],
    details: {
      material: "Acrylic mirror with flexible LED neon",
      mounting: "Custom mounting solution",
      weight: "Varies by design",
      care: "Wipe gently, avoid water near electrical components"
    }
  },
  {
    id: 7,
    name: "Infinity Oval Mirror",
    slug: "infinity-oval-mirror",
    price: 5499,
    salePrice: null,
    images: ["/images/product-oval-mirror.png", "/images/product-arch-mirror.png"],
    category: "Wall Mirrors",
    badge: "New",
    description: "A timeless oval mirror with a slim brushed brass frame. The classic silhouette works beautifully in both modern and traditional interiors, adding depth and elegance.",
    sizes: ["40x60cm", "50x70cm", "60x90cm"],
    details: {
      material: "HD glass with brushed brass frame",
      mounting: "French cleat system",
      weight: "4.2 kg (50x70cm)",
      care: "Polish frame with brass cleaner periodically"
    }
  },
  {
    id: 8,
    name: "Prism LED Vanity Mirror",
    slug: "prism-led-vanity-mirror",
    price: 4499,
    salePrice: 3299,
    images: ["/images/product-vanity-mirror.png", "/images/product-led-mirror.png"],
    category: "LED Mirrors",
    badge: "Sale",
    description: "A sleek rectangular vanity mirror with adjustable LED brightness and color temperature. Smart touch controls and anti-fog technology make it the ultimate bathroom upgrade.",
    sizes: ["50x70cm", "60x80cm"],
    details: {
      material: "Anti-fog glass with dimmable LED",
      mounting: "Wall mount with hidden bracket",
      weight: "6 kg (60x80cm)",
      care: "Use anti-fog spray monthly, clean with microfiber cloth"
    }
  }
];

export const categories = ["All", "Wall Mirrors", "LED Mirrors", "Custom Mirrors", "Decorative"];
