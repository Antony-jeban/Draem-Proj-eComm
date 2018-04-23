import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'product/:id', component: ProductsComponent },
    { path: 'products', component: ProductlistComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'login', component: LoginSignupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }