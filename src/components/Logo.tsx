import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
  variant?: "mark" | "lockup";
};

export function Logo({
  className,
  size = 112,
  priority = false,
  variant = "mark",
}: LogoProps) {
  if (variant === "lockup") {
    return (
      // PNG com alpha: next/image pode recomprimir e devolver o fundo vinho.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/images/logo_floripa_transparente.png"
        alt="Móveis Planejados LM Floripa"
        fetchPriority={priority ? "high" : undefined}
        className={`w-auto object-contain ${className ?? "h-16 md:h-20"}`}
      />
    );
  }

  return (
    <Image
      src="/images/logo.png"
      alt="Móveis Planejados LM Floripa"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-md object-cover ${className ?? "h-14 w-14"}`}
    />
  );
}
