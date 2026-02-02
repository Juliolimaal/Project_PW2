"use client";


import { useCart } from "@/contexts/CartContext";


type Product = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-56 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">
        {product.name}
      </h3>

      <p className="text-gray-700 mb-3">
        R$ {product.price.toFixed(2)}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
