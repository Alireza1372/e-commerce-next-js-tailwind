import Hero from "@/components/hero/Hero";
import NewProducts from "@/components/products/NewProducts";
import Testimonial from "@/components/testimoinal/Testimonial";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
