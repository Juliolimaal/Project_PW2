import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { WinesPage } from './pages/wines/wines';
import { CartPage } from './pages/cart/cart';
import { CheckoutPage } from './pages/checkout/checkout';
import { AdminPage } from './pages/admin/admin';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'World Wines' },
  { path: 'vinhos', component: WinesPage, title: 'Vinhos | World Wines' },
  { path: 'carrinho', component: CartPage, title: 'Carrinho | World Wines' },
  { path: 'pagamento', component: CheckoutPage, title: 'Pagamento | World Wines' },
  { path: 'admin', component: AdminPage, title: 'Gerenciar vinhos | World Wines' },
  { path: '**', redirectTo: '' }
];