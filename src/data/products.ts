export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  gallery: string[];
  hasActualImage: boolean;
  featured?: boolean;
  features: string[];
  applications: string[];
  /**
   * Keep empty or verified-only. Never invent unverified specs, prices,
   * production capacities, or warranties. Update here once verified by M.S.S. Enterprises.
   */
  specifications: ProductSpec[];
  configurations: string[];
}

export interface CategorySummary {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  hasActualImage: boolean;
}

export const PRODUCT_CATEGORIES: CategorySummary[] = [
  {
    slug: "paper-plate-dona-machines",
    name: "Paper Plate & Dona Making Machines",
    shortDescription:
      "Single die, double die, and hydraulic paper plate and dona manufacturing systems.",
    image: "/images/paper-plate-machines/double-die-machine.webp",
    hasActualImage: true,
  },
  {
    slug: "thermocol-plate-machines",
    name: "Thermocol Plate Making Machines",
    shortDescription:
      "Industrial thermocol plate and disposable tableware forming machinery.",
    image: "/images/thermocol-machines/thermocol-plate-machine.webp",
    hasActualImage: true,
  },
  {
    slug: "paper-roll-lamination-machines",
    name: "Paper Roll Lamination Machines",
    shortDescription:
      "Roll-to-roll lamination machines designed for paper plate raw material preparation.",
    image: "/images/lamination-machines/paper-roll-lamination-machine.webp",
    hasActualImage: true,
  },
  {
    slug: "paper-cup-glass-machines",
    name: "Paper Cup & Disposable Glass Machines",
    shortDescription:
      "Automated machines for manufacturing disposable paper cups and beverage glasses.",
    image: "/images/paper-cup-machines/paper-cup-making-machine.webp",
    hasActualImage: true,
  },
  {
    slug: "laser-cnc-plotter-machines",
    name: "Laser, CNC Router & Plotter Machines",
    shortDescription:
      "Precision laser cutting, CNC routing, spirit laser, and plotter equipment.",
    image: "/images/laser-machines/laser-cutting-machine.webp",
    hasActualImage: true,
  },
  {
    slug: "ro-water-treatment-plants",
    name: "RO Water Treatment Plants",
    shortDescription:
      "Commercial and industrial Reverse Osmosis water purification plants.",
    image: "/images/placeholder-machine.svg",
    hasActualImage: false,
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "fully-automatic-single-die-machine",
    name: "Fully Automatic Single Die Machine",
    category: "Paper Plate & Dona Making Machines",
    categorySlug: "paper-plate-dona-machines",
    shortDescription:
      "Compact, enclosed single-die unit built for paper plate and dona manufacturing businesses.",
    detailedDescription:
      "The Fully Automatic Single Die Machine is engineered for entrepreneurs and small-to-medium manufacturing units producing disposable paper plates and donas. Featuring an enclosed vertical cabinet and an accessible front control panel, it supports consistent day-to-day production.",
    image: "/images/paper-plate-machines/single-die-machine.webp",
    gallery: ["/images/paper-plate-machines/single-die-machine.webp"],
    hasActualImage: true,
    featured: true,
    features: [
      "Enclosed steel frame with protective side panels",
      "Integrated front control panel with indicator lamps and temperature controls",
      "Compact footprint suitable for workshops and startup units",
      "Designed for compatible paper plate and dona dies",
    ],
    applications: [
      "Disposable paper plate manufacturing",
      "Dona and bowl manufacturing",
      "Small-scale catering supply units",
    ],
    specifications: [],
    configurations: [
      "Die size options available on enquiry",
      "Electrical configuration shared upon quotation",
    ],
  },
  {
    slug: "fully-automatic-double-die-machine",
    name: "Fully Automatic Double Die Machine",
    category: "Paper Plate & Dona Making Machines",
    categorySlug: "paper-plate-dona-machines",
    shortDescription:
      "Dual-station fully automatic paper plate and dona machine with centralized front control panel.",
    detailedDescription:
      "Designed for higher output demands, the Fully Automatic Double Die Machine incorporates two die stations within a sturdy industrial frame. Its front-mounted control console enables operators to monitor and manage operations efficiently.",
    image: "/images/paper-plate-machines/double-die-machine.webp",
    gallery: ["/images/paper-plate-machines/double-die-machine.webp"],
    hasActualImage: true,
    featured: true,
    features: [
      "Dual-die operating stations for parallel production",
      "Heavy-duty structural frame with protective cabinet doors",
      "Centralized control box with independent dial controls",
      "Suitable for wholesale and commercial manufacturing setups",
    ],
    applications: [
      "Commercial paper plate production",
      "High-demand dona and thali manufacturing",
      "Wholesale disposable tableware supply",
    ],
    specifications: [],
    configurations: [
      "Compatible with multiple die sizes (confirmed on enquiry)",
      "Custom setup assistance provided by M.S.S. Enterprises",
    ],
  },
  {
    slug: "hydraulic-paper-plate-making-machine",
    name: "Hydraulic Paper Plate Making Machine",
    category: "Paper Plate & Dona Making Machines",
    categorySlug: "paper-plate-dona-machines",
    shortDescription:
      "Heavy-duty hydraulic press system built for demanding paper plate and thali production.",
    detailedDescription:
      "Our Hydraulic Paper Plate Making Machine delivers consistent pressing force for forming structured paper plates, wrinkle-free plates, and heavy-GSM disposable tableware. Equipped with a dedicated operator console and robust press assembly.",
    image: "/images/paper-plate-machines/hydraulic-paper-plate-machine.webp",
    gallery: [
      "/images/paper-plate-machines/hydraulic-paper-plate-machine.webp",
      "/images/gallery/industrial-press-unit.webp",
    ],
    hasActualImage: true,
    featured: true,
    features: [
      "Heavy-duty industrial press frame for stability",
      "Dedicated operator control console",
      "Designed for consistent hydraulic pressing",
      "Suitable for varied plate and thali profiles",
    ],
    applications: [
      "Heavy-duty paper plate and thali manufacturing",
      "Buffet plate production",
      "Industrial disposable foodware units",
    ],
    specifications: [],
    configurations: [
      "Single and multi-die hydraulic configurations available on enquiry",
    ],
  },
  {
    slug: "thermocol-plate-making-machine",
    name: "Thermocol Plate Making Machine",
    category: "Thermocol Plate Making Machines",
    categorySlug: "thermocol-plate-machines",
    shortDescription:
      "Industrial roll-fed forming unit with external electrical control panel for thermocol plates.",
    detailedDescription:
      "Built for commercial disposable tableware units, this Thermocol Plate Making Machine integrates a roll-feeding assembly, heavy steel frame, and a standalone electrical control cabinet for organized plant operation.",
    image: "/images/thermocol-machines/thermocol-plate-machine.webp",
    gallery: ["/images/thermocol-machines/thermocol-plate-machine.webp"],
    hasActualImage: true,
    featured: true,
    features: [
      "Heavy-duty steel frame with integrated roll stand",
      "Standalone electrical control panel for easy monitoring",
      "Designed for continuous commercial factory setups",
      "Structured layout for operator accessibility",
    ],
    applications: [
      "Thermocol plate and tray manufacturing",
      "Disposable catering tableware production",
    ],
    specifications: [],
    configurations: [
      "Mould and machine configurations shared upon business enquiry",
    ],
  },
  {
    slug: "paper-roll-lamination-machine",
    name: "Paper Roll Lamination Machine",
    category: "Paper Roll Lamination Machines",
    categorySlug: "paper-roll-lamination-machines",
    shortDescription:
      "Roll-fed lamination unit for preparing laminated paper rolls used in disposable plate production.",
    detailedDescription:
      "The Paper Roll Lamination Machine supports raw material preparation by laminating paper rolls cleanly and uniformly. Ideal for manufacturers looking to bring raw material processing in-house or supply laminated rolls to paper plate makers.",
    image: "/images/lamination-machines/paper-roll-lamination-machine.webp",
    gallery: ["/images/lamination-machines/paper-roll-lamination-machine.webp"],
    hasActualImage: true,
    featured: true,
    features: [
      "Integrated roll unwinding and feeding structure",
      "Enclosed drive housing for safer workshop operation",
      "Designed for paper plate and dona raw material preparation",
      "Sturdy steel chassis built for industrial use",
    ],
    applications: [
      "Silver and printed paper roll lamination",
      "Raw material supply for paper plate manufacturers",
      "In-house lamination for packaging units",
    ],
    specifications: [],
    configurations: [
      "Roll width and lamination options confirmed on quotation",
    ],
  },
  {
    slug: "paper-cup-making-machine",
    name: "Paper Cup Making Machine",
    category: "Paper Cup & Disposable Glass Machines",
    categorySlug: "paper-cup-glass-machines",
    shortDescription:
      "Automated multi-station paper cup forming machine for hot and cold beverage cups.",
    detailedDescription:
      "Our Paper Cup Making Machine is engineered for continuous manufacturing of disposable paper cups used across tea stalls, cafes, offices, events, and institutional catering. Its enclosed lower housing and precision forming stations enable streamlined operation.",
    image: "/images/paper-cup-machines/paper-cup-making-machine.webp",
    gallery: [
      "/images/paper-cup-machines/paper-cup-making-machine.webp",
      "/images/paper-cup-machines/disposable-glass-machine.webp",
    ],
    hasActualImage: true,
    featured: true,
    features: [
      "Automated multi-stage cup forming mechanism",
      "Durable industrial cabinet with service access doors",
      "Built for commercial beverage cup manufacturing",
      "Supports standard disposable paper cup moulds",
    ],
    applications: [
      "Tea and coffee paper cup manufacturing",
      "Cold beverage and water cup production",
      "Wholesale disposable cup supply",
    ],
    specifications: [],
    configurations: [
      "Cup size mould options available on request",
    ],
  },
  {
    slug: "disposable-glass-making-machine",
    name: "Disposable Glass Making Machine",
    category: "Paper Cup & Disposable Glass Machines",
    categorySlug: "paper-cup-glass-machines",
    shortDescription:
      "High-efficiency industrial unit for producing disposable beverage glasses.",
    detailedDescription:
      "Designed for manufacturers serving the hospitality, catering, and wholesale packaging markets, the Disposable Glass Making Machine combines automated forming stations with an integrated control cabinet for consistent output.",
    image: "/images/paper-cup-machines/disposable-glass-machine.webp",
    gallery: [
      "/images/paper-cup-machines/disposable-glass-machine.webp",
      "/images/paper-cup-machines/paper-cup-making-machine.webp",
    ],
    hasActualImage: true,
    features: [
      "Enclosed industrial body with control panel",
      "Automated feeding and forming stations",
      "Engineered for commercial disposable glass supply",
    ],
    applications: [
      "Disposable water and beverage glass manufacturing",
      "Event and institutional catering supply",
    ],
    specifications: [],
    configurations: [
      "Available machine models and mould options shared on enquiry",
    ],
  },
  {
    slug: "laser-cutting-machine",
    name: "Laser Cutting Machine",
    category: "Laser, CNC Router & Plotter Machines",
    categorySlug: "laser-cnc-plotter-machines",
    shortDescription:
      "Precision flatbed laser cutting system with dedicated CNC control console.",
    detailedDescription:
      "The industrial Laser Cutting Machine is designed for accurate sheet cutting, signage fabrication, and custom industrial profiling. Featuring a wide flatbed table, gantry cutting head, and an ergonomic operator control stand.",
    image: "/images/laser-machines/laser-cutting-machine.webp",
    gallery: ["/images/laser-machines/laser-cutting-machine.webp"],
    hasActualImage: true,
    featured: true,
    features: [
      "Rigid industrial flatbed structure with gantry head",
      "Dedicated operator display and control console",
      "Designed for precision cutting and repeatable accuracy",
      "Suitable for fabrication shops and industrial units",
    ],
    applications: [
      "Industrial sheet and panel cutting",
      "Signage, decorative, and architectural fabrication",
      "Custom workshop job work",
    ],
    specifications: [],
    configurations: [
      "Bed size and laser source options available on enquiry",
    ],
  },
  {
    slug: "cnc-router-machine",
    name: "CNC Router Machine",
    category: "Laser, CNC Router & Plotter Machines",
    categorySlug: "laser-cnc-plotter-machines",
    shortDescription:
      "Industrial CNC routing machine for precision carving, cutting, and panel machining.",
    detailedDescription:
      "Our CNC Router Machines support woodworking, furniture fabrication, signage, and industrial sheet machining. Built on a rigid bed with computerized gantry control for repeatable, clean cuts.",
    image: "/images/cnc-machines/cnc-router-machine.webp",
    gallery: ["/images/cnc-machines/cnc-router-machine.webp"],
    hasActualImage: true,
    features: [
      "Heavy-duty bed designed to minimize vibration",
      "Computerized gantry positioning system",
      "Suitable for multi-material cutting and engraving workflows",
    ],
    applications: [
      "Woodworking, doors, and furniture panels",
      "Acrylic, MDF, and signage cutting",
      "Custom interior and architectural fabrication",
    ],
    specifications: [],
    configurations: [
      "Working area and spindle configurations shared upon quotation",
    ],
  },
  {
    slug: "plotter-machine",
    name: "Plotter Machine",
    category: "Laser, CNC Router & Plotter Machines",
    categorySlug: "laser-cnc-plotter-machines",
    shortDescription:
      "Precision vinyl and graphic cutting plotter for signage and commercial printing units.",
    detailedDescription:
      "M.S.S. Enterprises supplies commercial Plotter Machines suited for vinyl cutting, signage creation, decal production, and graphic design workshops. Contact our team to discuss compatible models and specifications.",
    image: "/images/placeholder-machine.svg",
    gallery: ["/images/placeholder-machine.svg"],
    hasActualImage: false,
    features: [
      "Designed for clean graphic and vinyl cutting workflows",
      "Suitable for signage shops and print businesses",
      "Business enquiry assistance for model selection",
    ],
    applications: [
      "Vinyl signage and vehicle graphics",
      "Stickers, labels, and heat-transfer cutting",
    ],
    specifications: [],
    configurations: [
      "Cutting width and model options confirmed on enquiry",
    ],
  },
  {
    slug: "spirit-laser-machine",
    name: "Spirit Laser Machine",
    category: "Laser, CNC Router & Plotter Machines",
    categorySlug: "laser-cnc-plotter-machines",
    shortDescription:
      "Specialized laser engraving and cutting equipment for precision commercial applications.",
    detailedDescription:
      "Our Spirit Laser Machine range caters to businesses requiring fine engraving, marking, and light cutting across commercial signage, gifting, and industrial customization. Reach out for verified model specifications and quotations.",
    image: "/images/placeholder-machine.svg",
    gallery: ["/images/placeholder-machine.svg"],
    hasActualImage: false,
    features: [
      "Engineered for fine engraving and clean detailing",
      "Suitable for commercial workshops and customization units",
      "Technical enquiry support from M.S.S. Enterprises",
    ],
    applications: [
      "Precision engraving and product marking",
      "Signage, trophies, and customized fabrication",
    ],
    specifications: [],
    configurations: [
      "Model details and technical specs provided on quotation",
    ],
  },
  {
    slug: "ro-water-treatment-plant",
    name: "RO Water Treatment Plant",
    category: "RO Water Treatment Plants",
    categorySlug: "ro-water-treatment-plants",
    shortDescription:
      "Commercial and industrial Reverse Osmosis water purification plants tailored to capacity needs.",
    detailedDescription:
      "M.S.S. Enterprises supplies RO Water Treatment Plants for commercial drinking water setups, packaging units, institutions, and industrial process water needs. Our team assists in selecting the right plant capacity for your requirements.",
    image: "/images/placeholder-machine.svg",
    gallery: ["/images/placeholder-machine.svg"],
    hasActualImage: false,
    features: [
      "Designed for commercial and industrial water purification",
      "Scalable plant configurations based on water source and output needs",
      "End-to-end enquiry guidance from our Lucknow team",
    ],
    applications: [
      "Packaged drinking water businesses",
      "Factories, institutions, and commercial complexes",
      "Industrial process water treatment",
    ],
    specifications: [],
    configurations: [
      "Plant capacities (LPH) configured as per client requirement",
    ],
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  productSlug?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Fully Automatic Single Die Paper Plate & Dona Machine",
    category: "Paper Plate & Dona",
    image: "/images/gallery/single-die-machine.webp",
    productSlug: "fully-automatic-single-die-machine",
  },
  {
    id: "g-2",
    title: "Fully Automatic Double Die Paper Plate Machine",
    category: "Paper Plate & Dona",
    image: "/images/gallery/double-die-machine.webp",
    productSlug: "fully-automatic-double-die-machine",
  },
  {
    id: "g-3",
    title: "Hydraulic Paper Plate Making Machine",
    category: "Paper Plate & Dona",
    image: "/images/gallery/hydraulic-paper-plate-machine.webp",
    productSlug: "hydraulic-paper-plate-making-machine",
  },
  {
    id: "g-4",
    title: "Thermocol Plate Making Machine — Factory Installation",
    category: "Thermocol Machinery",
    image: "/images/gallery/thermocol-plate-machine.webp",
    productSlug: "thermocol-plate-making-machine",
  },
  {
    id: "g-5",
    title: "Paper Cup Making Machine — Shop Floor Unit",
    category: "Paper Cup & Glass",
    image: "/images/gallery/paper-cup-making-machine.webp",
    productSlug: "paper-cup-making-machine",
  },
  {
    id: "g-6",
    title: "Disposable Glass & Paper Cup Machine",
    category: "Paper Cup & Glass",
    image: "/images/gallery/disposable-glass-machine.webp",
    productSlug: "disposable-glass-making-machine",
  },
  {
    id: "g-7",
    title: "Paper Roll Lamination Machine",
    category: "Industrial Equipment",
    image: "/images/gallery/paper-roll-lamination-machine.webp",
    productSlug: "paper-roll-lamination-machine",
  },
  {
    id: "g-8",
    title: "Industrial Laser Cutting & CNC Router System",
    category: "Laser & CNC",
    image: "/images/gallery/laser-cutting-machine.webp",
    productSlug: "laser-cutting-machine",
  },
  {
    id: "g-9",
    title: "Heavy-Duty Hydraulic Press Unit",
    category: "Industrial Equipment",
    image: "/images/gallery/industrial-press-unit.webp",
    productSlug: "hydraulic-paper-plate-making-machine",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  );
  const others = PRODUCTS.filter(
    (p) => p.categorySlug !== product.categorySlug && p.slug !== product.slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}
