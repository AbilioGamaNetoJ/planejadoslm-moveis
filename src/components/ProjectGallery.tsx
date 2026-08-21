"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { ProjectCategory } from "@/src/data/store";

type ProjectGalleryProps = {
  categories: readonly ProjectCategory[];
};

export function ProjectGallery({ categories }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const closeGallery = () => {
    setActiveCategory(null);
    setActiveImageIndex(0);
    window.setTimeout(() => lastTriggerRef.current?.focus(), 0);
  };

  const showPreviousImage = () => {
    if (!activeCategory) return;

    setActiveImageIndex(
      (currentIndex) => (currentIndex - 1 + activeCategory.images.length) % activeCategory.images.length,
    );
  };

  const showNextImage = () => {
    if (!activeCategory) return;

    setActiveImageIndex((currentIndex) => (currentIndex + 1) % activeCategory.images.length);
  };

  useEffect(() => {
    if (!activeCategory) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
        return;
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
        return;
      }

      if (event.key === "ArrowRight") {
        showNextImage();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCategory, activeImageIndex]);

  const activeImage = activeCategory?.images[activeImageIndex];
  const hasMultipleImages = (activeCategory?.images.length ?? 0) > 1;

  return (
    <>
      <div className="mt-8 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] lg:grid-cols-4 lg:gap-4">
        {categories.map((category) => {
          const cover = category.images[0];

          return (
            <button
              key={category.slug}
              type="button"
              className={`group relative overflow-hidden text-left transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine ${
                category.span === "lg" ? "col-span-2 row-span-2 min-h-[280px]" : ""
              }`}
              aria-label={`Ver fotos de ${category.title}`}
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setActiveCategory(category);
                setActiveImageIndex(0);
              }}
            >
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes={
                  category.span === "lg"
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/65 text-cream backdrop-blur-sm sm:right-4 sm:top-4">
                <GalleryIcon className="h-4 w-4" />
                <span className="sr-only">Abrir galeria</span>
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 py-3 text-cream sm:px-5 sm:py-4">
                <span className="text-sm font-medium">{category.title}</span>
                <span className="shrink-0 text-xs text-cream/80">{category.images.length} fotos</span>
              </span>
            </button>
          );
        })}
      </div>

      {/*
        Only the cover of each category is rendered in the interactive grid above;
        the rest are reachable through the lightbox, which is client state and so
        invisible to crawlers. This list puts every photo in the served HTML with
        its real alt text, so Google Images can find them. Lazy-loaded, so a
        clipped list costs no bandwidth until it is exposed.
      */}
      <ul className="sr-only">
        {categories.flatMap((category) =>
          category.images.slice(1).map((image) => (
            <li key={image.src}>
              <figure>
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                <figcaption>
                  {category.title} — {image.alt}
                </figcaption>
              </figure>
            </li>
          )),
        )}
      </ul>

      {activeCategory && activeImage && (
        <div
          className="fixed inset-0 z-[70] flex bg-ink-deep/90 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative m-auto flex max-h-full w-full max-w-6xl flex-col overflow-hidden bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-cream-deep px-4 py-3 sm:px-6 sm:py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-deep">Projetos</p>
                <h4 id={titleId} className="mt-1 font-serif text-xl text-ink sm:text-2xl">
                  {activeCategory.title}
                </h4>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeGallery}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream-deep text-ink transition-colors hover:border-wine hover:bg-wine hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                aria-label="Fechar galeria"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="relative min-h-[280px] flex-1 bg-ink-deep sm:min-h-[360px]">
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, 1100px"
                className="object-contain"
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/75 text-cream transition-colors hover:bg-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:left-5 sm:h-12 sm:w-12"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/75 text-cream transition-colors hover:bg-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:right-5 sm:h-12 sm:w-12"
                    aria-label="Próxima foto"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}

              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/75 px-3 py-1 text-xs font-medium text-cream">
                {activeImageIndex + 1} / {activeCategory.images.length}
              </p>
            </div>

            {hasMultipleImages && (
              <div className="flex gap-2 overflow-x-auto border-t border-cream-deep px-4 py-3 sm:px-6">
                {activeCategory.images.map((image, imageIndex) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImageIndex(imageIndex)}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden border-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine sm:h-16 sm:w-24 ${
                      imageIndex === activeImageIndex ? "border-wine" : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                    aria-label={`Ver foto ${imageIndex + 1} de ${activeCategory.images.length}`}
                    aria-current={imageIndex === activeImageIndex ? "true" : undefined}
                  >
                    <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function GalleryIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m5.5 16 4.5-4.5 3 3 2-2 3.5 3.5" />
      <circle cx="8" cy="9" r="1.2" />
    </svg>
  );
}

function CloseIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <path d="m9.5 5 7 7-7 7" />
    </svg>
  );
}
