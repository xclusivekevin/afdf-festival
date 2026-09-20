import type { ReactNode } from "react";
export default function Legal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section bg-white-pattern pt-32">
      <div className="container"><div className="panel panel--white mx-auto max-w-3xl"><h1 className="text-[length:var(--text-h1-sm)]">{title}</h1><div className="ui mt-6 space-y-4 text-[15px] leading-[1.7] text-[color:var(--afdf-grey-700)] [&_h2]:mt-6 [&_h2]:font-[family-name:var(--font-ui)] [&_h2]:text-[16px] [&_h2]:font-bold [&_h2]:normal-case [&_h2]:text-black [&_ul]:list-disc [&_ul]:pl-5 [&_a]:underline">{children}</div></div></div>
    </section>
  );
}
