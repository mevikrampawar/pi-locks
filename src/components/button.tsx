import Link from "next/link";

type Variant = "dark" | "light" | "outline" | "outline-light";

export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const cls = `btn btn--${variant}${className ? ` ${className}` : ""}`;
  const inner = (
    <>
      <span>{children}</span>
      <i className="btn__arrow" aria-hidden="true">
        <span />
        <span />
        <span />
      </i>
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}