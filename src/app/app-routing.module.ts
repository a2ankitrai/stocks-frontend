import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';

const routes: Routes = [
  { path: '', component: StockComponent },
  { path: 'stocks', component: StockComponent },
  { path: 'create-stock', component: StockCreateComponent },
  { path: 'stock-edit/:id', component: StockEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
