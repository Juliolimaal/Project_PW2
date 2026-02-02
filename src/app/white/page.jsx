import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";


export default function WhitePage() {
    const products = [
        { id: 1, name: "White Wine Alesia", price: 899.99 },
        { id: 2, name: "Fresh White", price: 749.99 },
    ];


  return (
    <main style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
            <Link href="/">Home</Link>| {''}
            <Link href="/red">Red Wines</Link>| {''}
            <Link href="/rose">Rosé Wines</Link>
        </nav>


      <h1>🍷 White Wines</h1>
      
      <p>Os vinhos brancos são perfeitos para acompanhar pratos leves e momentos descontraídos.</p>


        <section style= {{ display : "flex", gap: "20px", marginTop: "20px" }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    </main>
  );
}