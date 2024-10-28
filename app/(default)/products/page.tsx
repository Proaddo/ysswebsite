import PageIllustration from "@/components/page-illustration";
import { ReactNode } from "react"; // Ensure ReactNode is imported
import HeroComponent from "@/components/productsherosection"; // Renamed import to avoid conflict
import ProductCard from "@/components/product-card"; // Assuming you have a ProductCard component
import { products } from "@/data/products"; // Assuming you have a data file for products

export const metadata = {
  title: "Yahweh Software Solutions",
  description: "Web Development | App Development | EV Mobility ",
};


export default function Products() {
  return (
    <>
      <PageIllustration />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
