import { NextResponse } from "next/server";

export async function POST(req) {
  const { items } = await req.json();

  const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      items: items.map(item => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: "BRL",
      })),
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
