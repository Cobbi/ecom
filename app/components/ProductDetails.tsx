import Image from "next/image";
import { productsData } from "../data/productsData";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = productsData.find((p) => p.id === productId);
  return (
    <>
      <div>
        <h3>`${product?.name}` Details</h3>
        <p>{product?.description}</p>
        <p>Price: ${product?.price.toFixed(2)}</p>
        {product && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        )}
        <button className="w-full flex items-center justify-center bg-sky-500 p-2 rounded-md">
          Add to Cart
        </button>
      </div>
    </>
  );
}
