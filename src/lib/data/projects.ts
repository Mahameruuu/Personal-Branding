import {
  Activity,
  ArrowLeftRight,
  Barcode,
  BellRing,
  Bot,
  Boxes,
  Brain,
  Building2,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  Coffee,
  CreditCard,
  Eye,
  FileDown,
  FileSearch,
  FileText,
  FlaskConical,
  Footprints,
  Gauge,
  GitCompare,
  Globe,
  HardHat,
  Heart,
  Languages,
  LayoutDashboard,
  LayoutGrid,
  Layers,
  Library,
  Lightbulb,
  LineChart,
  Lock,
  MessageSquare,
  Newspaper,
  Package,
  Plug,
  Printer,
  Radio,
  Receipt,
  RefreshCw,
  ScanFace,
  ScanSearch,
  Search,
  ShieldAlert,
  Shirt,
  ShoppingCart,
  Smartphone,
  SquareDashed,
  SquarePen,
  Star,
  Store,
  Tags,
  TicketPercent,
  TrendingUp,
  Upload,
  UserCog,
  UserX,
  Users,
  VenetianMask,
  Webhook,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { tech, type Tech } from "@/lib/data/tech";

/** A feature / roadmap entry: an icon (here) + localized text (in messages). */
export interface ProjectIconItem {
  /** Translation key, e.g. `features.maskDetection`. */
  key: string;
  icon: LucideIcon;
}

export interface Project {
  /** URL slug for the detail page + translation key under `projects.items.*`. */
  slug: string;
  /** Translation key under `projects.categories.*`. */
  category: string;
  /** Translation key under `projects.status.*`. */
  status: string;
  /** Technologies, sourced from the shared tech registry. */
  tech: Tech[];
  /** Feature grid entries (text in messages). */
  features: ProjectIconItem[];
  /** Future-roadmap entries (text in messages). */
  roadmap: ProjectIconItem[];

  // --- Assets: intentionally empty. Managed manually; set paths later. ---
  /** Hero/card cover image, e.g. "/projects/face-mask.jpg". Empty → cover block. */
  coverImage: string;
  /** Architecture diagram image. Empty → placeholder container. */
  architectureImage: string;
  /** Demo video, e.g. "/projects/face-mask.mp4". Empty → placeholder. */
  videoUrl: string;
  /**
   * Optional showcase image(s) — e.g. system/UI screenshots. Accepts a single
   * path (string) or several (string[]). Used for projects better shown as
   * images than a video (full-stack apps). When set and `videoUrl` is empty,
   * the detail page renders these instead of a video.
   */
  screenshots?: string | string[];

  /** Glyph used inside the cover block until a coverImage is set. */
  coverIcon: LucideIcon;
}

/**
 * Project case studies — the single source of truth for structural data;
 * all prose lives in messages/*.json. Add a future project (Face Recognition,
 * Anti-Spoofing, Barcode, Vehicle, Solar Forecasting, AI Monitoring …) by
 * appending an entry here + its copy in messages. No component changes needed.
 */
export const featuredProjects: Project[] = [
  {
    slug: "face-mask-detection",
    category: "computerVision",
    status: "completed",
    tech: [tech.yolo, tech.python, tech.opencv, tech.flask, tech.gcp, tech.docker],
    features: [
      { key: "maskDetection", icon: ScanFace },
      { key: "noMaskDetection", icon: UserX },
      { key: "crowd", icon: Users },
      { key: "realtime", icon: Radio },
      { key: "confidence", icon: Gauge },
      { key: "publicSpace", icon: Footprints },
    ],
    roadmap: [
      { key: "alerts", icon: BellRing },
      { key: "analytics", icon: LayoutDashboard },
      { key: "zones", icon: SquareDashed },
      { key: "mobile", icon: Smartphone },
    ],
    coverImage: "/projects/images/face-mask-cover.png",
    architectureImage: "",
    videoUrl: "/projects/videos/mask.mp4",
    coverIcon: VenetianMask,
  },
  {
    slug: "apd-detection",
    category: "computerVision",
    status: "inProgress",
    tech: [tech.yolo, tech.python, tech.opencv, tech.flask, tech.gcp, tech.docker],
    features: [
      { key: "hardhat", icon: HardHat },
      { key: "vest", icon: Shirt },
      { key: "violation", icon: ShieldAlert },
      { key: "worker", icon: Users },
      { key: "realtime", icon: Radio },
      { key: "coverage", icon: SquareDashed },
    ],
    roadmap: [
      { key: "alerts", icon: BellRing },
      { key: "analytics", icon: LayoutDashboard },
      { key: "zones", icon: SquareDashed },
      { key: "mobile", icon: Smartphone },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/apd-cover.png",
    architectureImage: "",
    videoUrl: "/projects/videos/apd.mp4",
    coverIcon: HardHat,
  },
  {
    slug: "ecommerce-website",
    category: "fullStack",
    status: "completed",
    tech: [tech.laravel, tech.mysql, tech.php, tech.vuejs, tech.bootstrap],
    features: [
      { key: "catalog", icon: LayoutGrid },
      { key: "cart", icon: ShoppingCart },
      { key: "search", icon: Search },
      { key: "account", icon: UserCog },
      { key: "checkout", icon: CreditCard },
      { key: "orders", icon: Package },
    ],
    roadmap: [
      { key: "payment", icon: CreditCard },
      { key: "admin", icon: LayoutDashboard },
      { key: "reviews", icon: Star },
      { key: "wishlist", icon: Heart },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/ecommerce-cover.png",
    architectureImage: "",
    videoUrl: "",
    // Full-stack project → show system screenshots instead of a video.
    screenshots: ["/projects/images/ecommerce.png"],
    coverIcon: ShoppingCart,
  },
  {
    slug: "kominfo-info-portal",
    category: "fullStack",
    status: "completed",
    tech: [tech.php, tech.mysql, tech.bootstrap, tech.javascript],
    features: [
      { key: "news", icon: Newspaper },
      { key: "article", icon: FileText },
      { key: "auth", icon: Lock },
      { key: "manage", icon: SquarePen },
      { key: "search", icon: Search },
      { key: "comments", icon: MessageSquare },
    ],
    roadmap: [
      { key: "categories", icon: Tags },
      { key: "media", icon: Upload },
      { key: "analytics", icon: LayoutDashboard },
      { key: "roles", icon: Users },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/kominfo-cover.png",
    architectureImage: "",
    videoUrl: "",
    // Full-stack system → single showcase screenshot (plain string is OK).
    screenshots: "/projects/images/kominfo.jpg",
    coverIcon: Newspaper,
  },
  {
    slug: "library-management",
    category: "fullStack",
    status: "completed",
    tech: [tech.mysql, tech.php, tech.css3, tech.javascript],
    features: [
      { key: "members", icon: Users },
      { key: "catalog", icon: Library },
      { key: "borrowing", icon: ArrowLeftRight },
      { key: "admin", icon: Lock },
      { key: "search", icon: Search },
      { key: "dashboard", icon: LayoutDashboard },
    ],
    roadmap: [
      { key: "barcode", icon: Barcode },
      { key: "fines", icon: Receipt },
      { key: "reports", icon: FileText },
      { key: "notifications", icon: BellRing },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/library-cover.png",
    architectureImage: "",
    videoUrl: "",
    // Full-stack system → showcase screenshot(s) after the description.
    screenshots: "/projects/images/library.png",
    coverIcon: Library,
  },
  {
    slug: "coffee-shop-pos",
    category: "fullStack",
    status: "completed",
    tech: [tech.laravel, tech.blade, tech.bootstrap, tech.mysql],
    features: [
      { key: "pos", icon: ShoppingCart },
      { key: "menu", icon: Coffee },
      { key: "members", icon: Users },
      { key: "voucher", icon: TicketPercent },
      { key: "receipt", icon: Printer },
      { key: "reports", icon: FileText },
    ],
    roadmap: [
      { key: "inventory", icon: Package },
      { key: "payment", icon: CreditCard },
      { key: "multiOutlet", icon: Store },
      { key: "analytics", icon: LayoutDashboard },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/coffeeshop-cover.png",
    architectureImage: "",
    videoUrl: "",
    // Full-stack system → showcase screenshot(s) after the description.
    screenshots: "/projects/images/coffeeshop.png",
    coverIcon: Coffee,
  },
  {
    slug: "lppm-system",
    category: "fullStack",
    status: "completed",
    tech: [tech.laravel, tech.blade, tech.bootstrap, tech.postgresql],
    features: [
      { key: "submission", icon: FileText },
      { key: "research", icon: FlaskConical },
      { key: "master", icon: Layers },
      { key: "categorization", icon: Tags },
      { key: "reports", icon: ClipboardList },
      { key: "roles", icon: Users },
    ],
    roadmap: [
      { key: "review", icon: ClipboardCheck },
      { key: "export", icon: FileDown },
      { key: "notifications", icon: BellRing },
      { key: "analytics", icon: LayoutDashboard },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/lppm-cover.png",
    architectureImage: "",
    videoUrl: "",
    // Full-stack system → showcase screenshot(s) after the description.
    screenshots: "/projects/images/lppm.png",
    coverIcon: FlaskConical,
  },
  {
    slug: "smart-sootblow-rule-analysis",
    category: "machineLearning",
    status: "completed",
    tech: [
      tech.python,
      tech.scikitlearn,
      tech.jupyter,
      tech.mysql,
      tech.flask,
      tech.swagger,
      tech.docker,
    ],
    features: [
      { key: "models", icon: Boxes },
      { key: "ruleAnalysis", icon: ScanSearch },
      { key: "suggestions", icon: Lightbulb },
      { key: "timeseries", icon: LineChart },
      { key: "eligibility", icon: Gauge },
      { key: "comparison", icon: GitCompare },
    ],
    roadmap: [
      { key: "realtime", icon: Radio },
      { key: "integration", icon: Plug },
      { key: "retraining", icon: RefreshCw },
      { key: "dashboard", icon: LayoutDashboard },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/sootblow-cover.png",
    architectureImage: "",
    videoUrl: "",
    // Single showcase screenshot after the description.
    screenshots: "/projects/images/sootblow.png",
    coverIcon: Brain,
  },
  {
    slug: "xorca-ai-assistant",
    category: "genAI",
    status: "completed",
    tech: [
      tech.python,
      tech.flask,
      tech.swagger,
      tech.redis,
      tech.colab,
      tech.gcp,
      tech.claude,
    ],
    features: [
      { key: "assistant", icon: Bot },
      { key: "rag", icon: FileSearch },
      { key: "enterprise", icon: Building2 },
      { key: "api", icon: Webhook },
      { key: "caching", icon: Zap },
      { key: "cloud", icon: Cloud },
    ],
    roadmap: [
      { key: "streaming", icon: Radio },
      { key: "vision", icon: Eye },
      { key: "multilingual", icon: Languages },
      { key: "analytics", icon: LayoutDashboard },
    ],
    // Assets managed manually — set these to your own files later.
    coverImage: "/projects/images/xorca-cover.png",
    architectureImage: "",
    videoUrl: "",
    // Single showcase screenshot after the description.
    screenshots: "/projects/images/xorca.png",
    coverIcon: Bot,
  },
  {
    slug: "face-recognition",
    category: "computerVision",
    status: "completed",
    tech: [
      tech.nextjs,
      tech.typescript,
      tech.tailwind,
      tech.react,
      tech.python,
      tech.flask,
      tech.opencv,
      tech.tensorflow,
      tech.mediapipe,
      tech.mysql,
      tech.jwt,
    ],
    features: [],
    roadmap: [],
    // Assets managed manually — replace these with your own files.
    coverImage: "/projects/images/face-recognition-cover.png",
    architectureImage: "",
    videoUrl: "/projects/videos/face-recognition.mp4",
    coverIcon: ScanFace,
  },
  {
    slug: "time-series-forecasting",
    category: "machineLearning",
    status: "comingSoon",
    tech: [tech.python, tech.scikitlearn, tech.pandas],
    features: [],
    roadmap: [],
    coverImage: "",
    architectureImage: "",
    videoUrl: "",
    coverIcon: TrendingUp,
  },
  {
    slug: "ilo-kbli-recommendation",
    category: "machineLearning",
    status: "comingSoon",
    tech: [tech.python, tech.pandas, tech.fastapi],
    features: [],
    roadmap: [],
    coverImage: "",
    architectureImage: "",
    videoUrl: "",
    coverIcon: Globe,
  },
  {
    slug: "anomaly-detection",
    category: "machineLearning",
    status: "comingSoon",
    tech: [tech.python, tech.scikitlearn, tech.fastapi, tech.docker],
    features: [],
    roadmap: [],
    coverImage: "",
    architectureImage: "",
    videoUrl: "",
    coverIcon: Activity,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}
