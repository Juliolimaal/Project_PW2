"use client";

import { useEffect } from "react";

export default function CartPage() {
  useEffect(() => {
    const cartIcon = document.getElementById('cart-icon');
    const cartPanel = document.getElementById('cart-panel');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart');
    const cartCountEl = document.getElementById('cart-count');
    const closeCartBtn = document.getElementById('close-cart-btn');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
      cartCountEl.textContent = cart.reduce((acc, item) => acc + item.qty, 0);
    }

    function renderCart() {
      cartItemsEl.innerHTML = cart.map(item => `
        <li class="flex justify-between items-center border-b border-gray-300 pb-2">
          <span>${item.name}</span>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-600">(${item.qty}x)</span>
            <span>R$ ${(item.price * item.qty).toFixed(2)}</span>
            <button class="text-[#A7AA37] remove-item-btn" data-name="${item.name}">x</button>
          </div>
        </li>
      `).join('');

      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      cartTotalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
      updateCartCount();

      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(name, price) {
      const existing = cart.find(item => item.name === name);
      if (existing) existing.qty++;
      else cart.push({ name, price, qty: 1 });
      renderCart();
    }

    function removeItem(name) {
      cart = cart.filter(item => item.name !== name);
      renderCart();
    }

    document.body.addEventListener('click', (event) => {
      const addButton = event.target.closest('.add-to-cart-btn');
      if (addButton) {
        addToCart(addButton.dataset.name, parseFloat(addButton.dataset.price));
      }
    });

    cartItemsEl.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-item-btn')) {
        removeItem(event.target.dataset.name);
      }
    });

    clearCartBtn.addEventListener('click', () => {
      cart = [];
      renderCart();
    });

    cartIcon.addEventListener('click', () => {
      cartPanel.classList.toggle('translate-x-[calc(100%+2rem)]');
    });

    closeCartBtn.addEventListener('click', () => {
      cartPanel.classList.add('translate-x-[calc(100%+2rem)]');
    });

    renderCart();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Carrinho</h1>
    </div>
  );
}
