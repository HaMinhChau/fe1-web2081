import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Products } from './products/products';
import { Stories } from './stories/stories';
import { AddStory } from './add-story/add-story';
import { Register } from './register/register';


export const routes: Routes = [
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'home', component: Home },
    { path: 'products', component: Products },
    { path: 'stories', component: Stories },
    { path: 'add-story', component: AddStory },
    { path: 'app-register', component: Register },
];

