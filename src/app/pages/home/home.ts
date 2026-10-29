import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WineCard } from '../../components/wine-card/wine-card';
import { WineService } from '../../services/wine.service';
import { CartService } from '../../services/cart.service';
import { Wine } from '../../models/wine';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, WineCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage implements OnInit {
  readonly wines = inject(WineService);
  private readonly cart = inject(CartService);

  ngOnInit(): void {
    this.wines.loadWines();
  }

  addToCart(wine: Wine): void {
    this.cart.add(wine);
  }
}