import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';


export const routes:Routes =[
    {
        path:'home',
       
        component:HomeComponent
    },
    {
        path:'about',
       
        component:AboutComponent
    }
    
];