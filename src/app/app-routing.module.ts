import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SavedmoviesComponent } from './savedmovies/savedmovies.component';


const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  {
    path:'home',
    component: HomeComponent
  },
   { path: 'saved', component: SavedmoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
