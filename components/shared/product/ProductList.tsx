import { Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

interface ProductListProps {
  data: Product[];
  title?: string;
}

export default function ProductList({ data, title }: ProductListProps) {
  return (
    <div className="my-10">
      {title && (
        <h2 className="font-bold text-2xl mb-6">{title}</h2>
      )}

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-yellow-600">
                    ★ {product.rating}
                  </span>
                </div>

                <div className="mt-2">
                  {product.inStock ? (
                    <span className="text-sm text-green-600 font-medium">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-sm text-red-500 font-medium">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No products found.</p>
      )}
    </div>
  );
}