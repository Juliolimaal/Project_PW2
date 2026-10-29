import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class CheckoutPage {
  private readonly formBuilder = inject(FormBuilder);
  readonly cart = inject(CartService);
  readonly submitted = signal(false);
  readonly buyerForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(5)]]
  });

  finishOrder(): void {
    if (this.buyerForm.invalid || this.cart.items().length === 0) {
      this.buyerForm.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    this.cart.clear();
    this.buyerForm.reset();
  }
}