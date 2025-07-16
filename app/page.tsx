import Image from "next/image";
import Link from "next/link";
import { productsData } from "./data/productsData";
import { Product } from "./data/product";

const featuredProduct: Product = {
  id: "f1",
  name: "MacBook Pro 16”",
  description: "Powerful. Sleek. Reliable.",
  price: 2499.99,
  imageUrl: "/images/macbook_pro.jpg",
};

export default function Home() {
  const products = productsData;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-white">Welcome to TechMart</h1>
        <p className="text-white">Your one-stop shop for the latest gadgets</p>
      </header>

      {/* Featured Product */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-300 mb-2">Featured Product</h2>
          <h3 className="text-xl font-bold text-gray-300">{featuredProduct.name}</h3>
          <p className="text-gray-400 mb-4">{featuredProduct.description}</p>
          <p className="text-primary text-lg font-semibold">${featuredProduct.price}</p>
        </div>
        <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
          <Image
            src={featuredProduct.imageUrl}
            alt={featuredProduct.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Popular Products */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Popular Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0,6).map((product) => (
            <Link 
              href={`/products/${product.id}`}
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-primary font-bold mt-2">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore More */}
      <section className="text-center pt-10">
        <p className="text-lg text-gray-700 mb-4">Looking for more?</p>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Explore All Products
        </Link>
      </section>
    </div>
  );
}
