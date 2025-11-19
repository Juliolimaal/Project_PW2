// src/js/statistics.js

export function recordSale(wineName) {
  const sales = JSON.parse(localStorage.getItem("sales")) || [];
  sales.push({
    name: wineName,
    date: Date.now()
  });
  localStorage.setItem("sales", JSON.stringify(sales));
}

export function getMostPurchased() {
  const sales = JSON.parse(localStorage.getItem("sales")) || [];

  if (sales.length === 0) {
    return null;
  }

  const counts = sales.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
  }, {});

  const names = Object.keys(counts);

  const topName = names.reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  return {
    name: topName,
    count: counts[topName],
    total: sales.length,
    percent: Math.round((counts[topName] / sales.length) * 100)
  };
}
