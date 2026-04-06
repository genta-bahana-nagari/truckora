import Header from "@/components/sections/contact/Header";
import Form from "@/components/sections/contact/Form";
import Info from "@/components/sections/contact/Info";
import CTA from "@/components/sections/contact/CTA";

export default function Page() {
  return (
    <>
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:gap-16 lg:grid-cols-2">
        <Form />
        <Info />
      </section>
      <CTA />
    </>
  );
}
