import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function Logo({ className = "h-14 w-14", size = 112, priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Móveis Planejados LM Floripa"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-md object-cover ${className}`}
    />
  );
}
