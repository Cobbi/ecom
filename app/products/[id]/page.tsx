import ProductDetails from "@/app/components/ProductDetails";
import { productsData } from "@/app/data/productsData";
import NotFoundPage from "@/app/not-found/page";

export default function ProductDetailsPage({params}: {params: { id: string }}) {

  const product = productsData.find((product) => product.id === params.id);
  if (!product) {
    return <NotFoundPage />;
  }


  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-primary text-lg font-semibold">${product.price}</p>
    </div>
  );
}
