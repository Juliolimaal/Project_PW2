type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Vinho Tinto Reserva",
    price: 89.9,
    description: "Um vinho tinto encorpado com notas de frutas vermelhas."
  },
  {
    id: 2,
    name: "Vinho Branco Seco",
    price: 74.5,
    description: "Um vinho branco fresco e leve, perfeito para dias quentes."
  },
  {
    id: 3,
    name: "Vinho Rosé",
    price: 69.9,
    description: "Um vinho rosé delicado com sabor frutado e refrescante."
  },
];

type Props = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
    </main>
  );
}
