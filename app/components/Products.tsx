import Image from "next/image";
import { Product } from "../data/product";
import Link from "next/link";

export default function Products({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Link href={"/products/" + `${product.id}`} key={product.id}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={300}
            style={{ objectFit: 'cover' }}
          />
          <div className="flex justify-between text-center mt-2">
            <h2>{product.name}</h2>
            {/* <p>{product.description}</p> */}
            <p>${product.price.toFixed(2)}</p>
          </div>
          <button className="w-full flex items-center justify-center bg-sky-500 p-2 rounded-md">Add to Cart</button>
        </Link>
      ))}
    </>
  );
}
