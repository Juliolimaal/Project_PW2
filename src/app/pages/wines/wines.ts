import { Component, OnInit, inject } from '@angular/core';
import { WineCard } from '../../components/wine-card/wine-card';
import { CartService } from '../../services/cart.service';
import { WineService } from '../../services/wine.service';
import { Wine } from '../../models/wine';

@Component({
  selector: 'app-wines-page',
  standalone: true,
  imports: [WineCard],
  templateUrl: './wines.html',
  styleUrl: './wines.css'
})
export class WinesPage implements OnInit {
  readonly catalog = inject(WineService);
  private readonly cart = inject(CartService);

  ngOnInit(): void {
    this.catalog.loadWines();
  }

  addToCart(wine: Wine): void {
    this.cart.add(wine);
  }
}