import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Products } from './products/products';
export const routes: Routes = [
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'home', component: Home },
    { path: 'products', component: Products },
];

