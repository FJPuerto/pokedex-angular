import { RouterModule } from '@angular/router';
import { PageRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ListComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
