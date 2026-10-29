import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { demoWines, Wine } from '../models/wine';

@Injectable({ providedIn: 'root' })
export class WineService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.supabaseUrl.replace(/\/$/, '');
  private readonly configured = Boolean(this.url && environment.supabaseAnonKey);
  private readonly headers = new HttpHeaders({
    apikey: environment.supabaseAnonKey,
    Authorization: `Bearer ${environment.supabaseAnonKey}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
  });

  readonly wines = signal<Wine[]>(demoWines);
  readonly loading = signal(false);
  readonly message = signal('');

  loadWines(): void {
    if (!this.configured) {
      this.wines.set(demoWines);
      this.message.set('Catálogo local carregado. Configure o Supabase para usar os dados da tabela wines.');
      return;
    }

    this.loading.set(true);
    this.message.set('');
    this.http.get<Wine[]>(`${this.url}/rest/v1/wines?select=*`, { headers: this.headers })
      .subscribe({
        next: wines => {
          this.wines.set(wines);
          this.loading.set(false);
        },
        error: () => {
          this.wines.set(demoWines);
          this.message.set('Não foi possível acessar o Supabase. O catálogo local está sendo exibido.');
          this.loading.set(false);
        }
      });
  }

  addWine(wine: Omit<Wine, 'id'>): Observable<Wine[]> {
    const newWine = { ...wine, id: crypto.randomUUID() };
    return this.http.post<Wine[]>(`${this.url}/rest/v1/wines`, newWine, { headers: this.headers })
      .pipe(tap(result => this.wines.update(items => [...items, ...(result.length ? result : [newWine])])));
  }

  deleteWine(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/rest/v1/wines?id=eq.${encodeURIComponent(id)}`, { headers: this.headers })
      .pipe(tap(() => this.wines.update(items => items.filter(wine => wine.id !== id))));
  }

  readonly categories = computed(() => [...new Set(this.wines().map(wine => wine.category))]);
}