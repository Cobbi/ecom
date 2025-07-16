import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-gray-800 text-white mx-auto max-w-7xl">
      <ul className="flex space-x-4 p-2">
         <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
