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
      // WebP preserva a transparência da assinatura da marca.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/images/logo_floripa_transparente.webp"
        alt="Móveis Planejados LM Floripa"
        width={1024}
        height={708}
        fetchPriority={priority ? "high" : undefined}
        className={`w-auto object-contain ${className ?? "h-16 md:h-20"}`}
      />
    );
  }

  return (
    <Image
      src="/images/logo.webp"
      alt="Móveis Planejados LM Floripa"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-md object-cover ${className ?? "h-14 w-14"}`}
    />
  );
}
