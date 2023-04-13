import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent  
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'list/details/:id',
        component: DetailsComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
    ]
})
export class PageRoutingModule { }
