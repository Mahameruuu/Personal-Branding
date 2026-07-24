import type { ComponentType } from "react";
import { BarChart3, FileCode2, LineChart, ScanEye } from "lucide-react";
import {
  SiPython,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiR,
  SiStreamlit,
  SiLaravel,
  SiFastapi,
  SiPhp,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiOpencv,
  SiFlask,
  SiVuedotjs,
  SiJupyter,
  SiSwagger,
  SiRedis,
  SiGooglecolab,
  SiGooglecloud,
  SiClaude,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiReactquery,
  SiAxios,
  SiLeaflet,
  SiFramer,
  SiMediapipe,
  SiJsonwebtokens,
  SiNumpy,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";

/** Any icon that accepts a `className` — covers both lucide & react-icons. */
export type IconType = ComponentType<{ className?: string }>;

export interface Tech {
  name: string;
  icon: IconType;
  /** Brand color, used for the logo + a subtle chip tint. */
  color: string;
}

/**
 * Single source of truth for technologies, their logos and brand colors.
 * Referenced by both the Skills section and the Projects section so a
 * given tool always looks identical across the site.
 *
 * Notes:
 * - Logos missing from simple-icons (Matplotlib, Tableau, YOLO) use a
 *   representative lucide glyph instead.
 * - Flask is brand-black; we use a neutral gray so it stays visible in
 *   dark mode.
 */
export const tech = {
  python: { name: "Python", icon: SiPython, color: "#3776AB" },
  tensorflow: { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  keras: { name: "Keras", icon: SiKeras, color: "#D00000" },
  scikitlearn: { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  pandas: { name: "Pandas", icon: SiPandas, color: "#150458" },
  matplotlib: { name: "Matplotlib", icon: LineChart, color: "#11557C" },
  r: { name: "R", icon: SiR, color: "#276DC3" },
  tableau: { name: "Tableau", icon: BarChart3, color: "#E97627" },
  streamlit: { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  laravel: { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  blade: { name: "Blade", icon: FileCode2, color: "#FF2D20" },
  fastapi: { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  php: { name: "PHP", icon: SiPhp, color: "#777BB4" },
  java: { name: "Java", icon: FaJava, color: "#ED8B00" },
  cpp: { name: "C++", icon: SiCplusplus, color: "#00599C" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  vuejs: { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  react: { name: "React", icon: SiReact, color: "#61DAFB" },
  html5: { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  css3: { name: "CSS3", icon: SiCss, color: "#1572B6" },
  bootstrap: { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  mysql: { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  mongodb: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  aws: { name: "AWS", icon: FaAws, color: "#FF9900" },
  docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  git: { name: "Git", icon: SiGit, color: "#F05032" },
  opencv: { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
  flask: { name: "Flask", icon: SiFlask, color: "#6B7280" },
  jupyter: { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
  swagger: { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
  redis: { name: "Redis", icon: SiRedis, color: "#FF4438" },
  colab: { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
  gcp: { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  claude: { name: "Claude API", icon: SiClaude, color: "#D97757" },
  // Brand-black logos use a neutral gray so they stay visible in dark mode.
  nextjs: { name: "Next.js", icon: SiNextdotjs, color: "#6B7280" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  shadcn: { name: "shadcn/ui", icon: SiShadcnui, color: "#6B7280" },
  tanstack: { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  axios: { name: "Axios", icon: SiAxios, color: "#5A29E4" },
  leaflet: { name: "Leaflet", icon: SiLeaflet, color: "#199900" },
  framerMotion: { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  mediapipe: { name: "MediaPipe", icon: SiMediapipe, color: "#0097A7" },
  jwt: { name: "JWT", icon: SiJsonwebtokens, color: "#6B7280" },
  numpy: { name: "NumPy", icon: SiNumpy, color: "#4D77CF" },
  yolo: { name: "YOLO", icon: ScanEye, color: "#00B8D9" },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof tech;
