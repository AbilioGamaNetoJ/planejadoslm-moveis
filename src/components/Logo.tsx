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
      <Image
        src="/images/logo_floripa_transparente.png"
        alt="Móveis Planejados LM Floripa"
        width={1024}
        height={708}
        priority={priority}
        className={`w-auto object-contain ${className ?? "h-14 md:h-16"}`}
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
