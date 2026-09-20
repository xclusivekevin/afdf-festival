import Link from "next/link";
import type { ReactNode } from "react";

export function Btn({ href, children, variant = "red", className = "" }: { href: string; children: ReactNode; variant?: "red" | "orange" | "white" | "green"; className?: string }) {
  const ext = /^(https?:|mailto:|tel:|#)/.test(href);
  const cls = `btn btn--${variant} ${className}`;
  return ext ? <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{children}</a> : <Link href={href} className={cls}>{children}</Link>;
}
export const Arrow = () => <span aria-hidden>→</span>;

export function YouTube({ id, title }: { id: string; title: string }) {
  return <div className="aspect-video w-full overflow-hidden rounded-lg bg-black"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>;
}

/** Simple page banner for inner pages */
export function Banner({ title, sub, image = "/img/Hero-2-scaled.jpg", children }: { title: ReactNode; sub?: ReactNode; image?: string; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[420px] items-center pt-16 text-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container py-16">
        <h1 className="mx-auto max-w-4xl text-[length:var(--text-h1)]">{title}</h1>
        {sub && <div className="ui mx-auto mt-4 max-w-2xl text-[16px] font-semibold text-white">{sub}</div>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
