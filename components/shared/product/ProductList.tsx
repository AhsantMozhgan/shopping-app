import { Product } from "@/data/products";
import ProductCard from "@/components/shared/product/ProductCard";

interface ProductListProps {
  data: Product[];
  title?: string;
  limit?: number;
}

export default function ProductList({ data, title, limit }: ProductListProps) {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}

      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedData.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No products found.</p>
      )}
    </div>
  );
}
