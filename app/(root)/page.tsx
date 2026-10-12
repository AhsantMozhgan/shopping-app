import { products } from "@/data/products";
import ProductList from "@/components/shared/product/ProductList";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>

      <p className="mb-4">Total products: {products.length}</p>
      <ProductList data={products} title="Featured Products" />
    </div>
  );
}


// import { Button } from "@/components/ui/button";

// function HomePage() {
//   return (
//     <div>
//       <main>
//         <div>Home Page</div>
//         <Button>Button</Button>
//             <ProductList data={products} title="Featured Products" />
//       </main>
//     </div>
//   );
// }

// export default HomePage;
