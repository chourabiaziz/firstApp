import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';


const ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'produits', component: ProductComponent},
  {path:'categorie/:id',  component: ProductComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component:NotFoundComponent },

]
                                    

@NgModule({
   exports:[RouterModule],

   imports: [
    RouterModule.forRoot(ROUTES),
       ]
})
export class AppRoutingModule { }
