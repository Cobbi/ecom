import { productsData } from "@/app/data/productsData";
import NotFoundPage from "@/app/not-found/page";
import Image from "next/image";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 

  const product = productsData.find((product) => product.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex w-full mx-auto max-w-6xl px-4 py-8">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="h-auto object-cover rounded-lg mb-6"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-8">
        <h3 className="text-4xl">{product.name}</h3>
        <p>{product.description}</p>
        <p className="text-primary text-lg font-semibold">${product.price}</p>
        <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors mt-8">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
