import ProductCard from "../components/ProductCard";
import Link from "next/link";


export default function RosePage() {
    const products = [
        { id: 1, name: "Port Da Luz Rosé", price: 899.99 },
        { id: 2, name: "Fresh Rosé", price: 749.99 },
    ];

  return (
    <main style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
            
            <Link href="/">Home</Link>| {''}
            <Link href="/red">Red Wines</Link>| {''}
            <Link href="/white">White Wines</Link>| {''}
            
        </nav>
      <h1>🍷 Rosé Wines</h1>
      <p>Deliciosos, leves e refrescantes. Os vinhos rosé são preferidos para momentos especiais.</p>


        <section style={{ display : "flex", gap: "20px", marginTop: "20px" }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    </main>
  );
}