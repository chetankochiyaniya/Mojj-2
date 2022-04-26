import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path: "posts", component: PostComponent},
  {path: "stocks", component: StockComponent},
  {path: "register", component: RegisterComponent},
  {path: "pageNotFound", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
