import type { Metadata } from "next";
import { Btn, Arrow } from "@/components/ui";
export const metadata: Metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-20 text-center" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.78)), url(/img/Hero-2-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container py-20">
        <p className="ui text-[13px] font-bold uppercase tracking-wide text-[color:var(--afdf-orange-500)]">Error 404</p>
        <h1 className="mt-4 text-[length:var(--text-h1)]">You took a wrong turn at the jollof</h1>
        <p className="ui mx-auto mt-4 max-w-xl text-[16px] font-semibold text-white">The page you were looking for is not here. It may have been part of the previous site.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Btn href="/" variant="red">Back to the Festival <Arrow /></Btn>
          <Btn href="/register" variant="orange">Register <Arrow /></Btn>
        </div>
      </div>
    </section>
  );
}
