import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Wine } from '../../models/wine';

@Component({
  selector: 'app-wine-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './wine-card.html',
  styleUrl: './wine-card.css'
})
export class WineCard {
  @Input({ required: true }) wine!: Wine;
  @Output() add = new EventEmitter<Wine>();
}