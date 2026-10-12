import ProductList from '@/components/shared/product/ProductList';
import {data} from '@/data/products';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductList data={data.products} title="Products" />
    </div>
  );
}

export default HomePage