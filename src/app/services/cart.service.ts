import { Injectable, computed, signal } from '@angular/core';
import { Wine } from '../models/wine';

export interface CartItem {
  wine: Wine;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly storageKey = 'world-wines-cart';
  readonly items = signal<CartItem[]>(this.readSavedCart());
  readonly count = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));
  readonly total = computed(() => this.items().reduce((sum, item) => sum + item.wine.price * item.quantity, 0));

  add(wine: Wine): void {
    this.items.update(items => {
      const existing = items.find(item => item.wine.id === wine.id);
      return existing
        ? items.map(item => item.wine.id === wine.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { wine, quantity: 1 }];
    });
    this.save();
  }

  remove(id: string): void {
    this.items.update(items => items.filter(item => item.wine.id !== id));
    this.save();
  }

  clear(): void {
    this.items.set([]);
    this.save();
  }

  private readSavedCart(): CartItem[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]') as CartItem[];
    } catch {
      return [];
    }
  }

  private save(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items()));
    }
  }
}