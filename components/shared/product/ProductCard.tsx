import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link
          href={`/product/${product.slug}`}
          className="relative block w-full aspect-square overflow-hidden"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover"
            priority
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.category}</div>

        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.title}</h2>
        </Link>

        <div className="flex justify-between items-center gap-4">
          {product.inStock ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="text-muted-foreground">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}