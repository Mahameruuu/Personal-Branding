"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Images, Play, Workflow } from "lucide-react";

import { MediaPlaceholder } from "@/components/projects/media-placeholder";
import { getProjectBySlug } from "@/lib/data/projects";

/**
 * Returns true once an image at `src` has successfully loaded. Lets us show a
 * designed fallback until a real asset path is configured, so a missing or
 * empty path never renders as a broken image.
 */
function useImageReady(src?: string) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!src) {
      setReady(false);
      return;
    }
    let active = true;
    const img = new window.Image();
    img.onload = () => active && setReady(true);
    img.onerror = () => active && setReady(false);
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  return ready;
}

/**
 * These components take a serializable `slug` (not the project object, which
 * holds non-serializable icon components) and resolve the project on the
 * client — keeping the server → client boundary clean. Asset paths come from
 * the project data and are empty by default.
 */

/**
 * Cover visual for cards and the detail hero. Shows the configured cover
 * image once it loads, otherwise a clean cover block with the project glyph.
 */
export function ProjectCover({ slug, alt }: { slug: string; alt: string }) {
  const project = getProjectBySlug(slug);
  const ready = useImageReady(project?.coverImage);

  if (!project) return null;

  if (!project.coverImage || !ready) {
    const Icon = project.coverIcon;
    return (
      <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="size-16 text-foreground/10 transition-transform duration-500 ease-out group-hover:scale-110"
            strokeWidth={1}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
      <Image
        src={project.coverImage}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}

/** Architecture diagram — image when configured, dashed placeholder until then. */
export function ProjectArchitecture({
  slug,
  alt,
  placeholderLabel,
}: {
  slug: string;
  alt: string;
  placeholderLabel: string;
}) {
  const project = getProjectBySlug(slug);
  const ready = useImageReady(project?.architectureImage);

  if (!project) return null;

  if (!project.architectureImage || !ready) {
    return (
      <MediaPlaceholder icon={Workflow} label={placeholderLabel} aspect="video" />
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted">
      <Image
        src={project.architectureImage}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 896px"
        className="object-contain"
      />
    </div>
  );
}

/** A single showcase screenshot — real image when loaded, placeholder until then. */
function GalleryImage({
  src,
  alt,
  placeholderLabel,
}: {
  src: string;
  alt: string;
  placeholderLabel: string;
}) {
  const ready = useImageReady(src);

  if (!ready) {
    return (
      <MediaPlaceholder icon={Images} label={placeholderLabel} aspect="video" />
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted/40 shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 896px"
        className="object-contain"
      />
    </div>
  );
}

/**
 * Showcase gallery for non-video projects (e.g. full-stack apps) — renders
 * the configured screenshots. Each image shows a placeholder until its file
 * is available, so nothing ever appears broken.
 */
export function ProjectGallery({
  slug,
  alt,
  placeholderLabel,
}: {
  slug: string;
  alt: string;
  placeholderLabel: string;
}) {
  const project = getProjectBySlug(slug);

  // Accept either a single path (string) or several (string[]).
  const shots = project?.screenshots
    ? Array.isArray(project.screenshots)
      ? project.screenshots
      : [project.screenshots]
    : [];

  if (!shots.length) return null;

  return (
    <div className="grid gap-4">
      {shots.map((src, i) => (
        <GalleryImage
          key={i}
          src={src}
          alt={`${alt} — ${i + 1}`}
          placeholderLabel={placeholderLabel}
        />
      ))}
    </div>
  );
}

/** Demo video — player when a videoUrl is configured, placeholder until then. */
export function ProjectVideo({
  slug,
  placeholderLabel,
}: {
  slug: string;
  placeholderLabel: string;
}) {
  const project = getProjectBySlug(slug);
  const posterReady = useImageReady(project?.coverImage);
  const [failed, setFailed] = useState(false);

  if (!project) return null;

  if (!project.videoUrl || failed) {
    return (
      <MediaPlaceholder icon={Play} label={placeholderLabel} aspect="video" />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border shadow-sm">
      <video
        controls
        playsInline
        preload="metadata"
        poster={posterReady ? project.coverImage : undefined}
        onError={() => setFailed(true)}
        className="aspect-video w-full bg-black"
      >
        <source src={project.videoUrl} />
      </video>
    </div>
  );
}
