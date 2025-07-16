import Products from "../components/Products";
import { productsData } from "../data/productsData";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h3>Products Page</h3>
        <p>Explore our range of products.</p>
        <div className="grid grid-cols-3 gap-8 mx-auto max-w-6xl">
        <Products products={productsData}/>
        </div>
    </div>
  );
}