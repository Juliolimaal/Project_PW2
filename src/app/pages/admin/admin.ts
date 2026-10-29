import { Component, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminPage implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  readonly catalog = inject(WineService);
  readonly status = signal('');

  readonly wineForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    category: ['Tinto', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]],
    image: ['/images/image-wine-red-alesia.png', Validators.required]
  });

  ngOnInit(): void {
    this.catalog.loadWines();
  }

  createWine(): void {
    if (this.wineForm.invalid) {
      this.wineForm.markAllAsTouched();
      return;
    }
    this.catalog.addWine(this.wineForm.getRawValue()).subscribe({
      next: () => {
        this.status.set('Vinho cadastrado.');
        this.wineForm.reset({
          name: '',
          category: 'Tinto',
          description: '',
          price: 0,
          image: '/images/image-wine-red-alesia.png'
        });
      },
      error: () => this.status.set('Não foi possível cadastrar. Confira a configuração e as políticas do Supabase.')
    });
  }

  deleteWine(id: string): void {
    this.catalog.deleteWine(id).subscribe({
      next: () => this.status.set('Vinho removido.'),
      error: () => this.status.set('Não foi possível remover. Confira a configuração e as políticas do Supabase.')
    });
  }
}