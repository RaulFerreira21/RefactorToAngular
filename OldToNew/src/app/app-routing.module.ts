import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SimpleCarouselComponent } from './components/simple-carousel/simple-carousel.component';

const routes: Routes = [
  { path: 'carousel-project', component: SimpleCarouselComponent},
  { path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
