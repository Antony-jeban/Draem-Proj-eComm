import { NgModule } from '@angular/core';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';

import { AppRoutingModule } from './app.router';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomepageComponent,
        ProductsComponent,
        ProductlistComponent,
        ContactUsComponent,
        LoginSignupComponent
    ],
    imports: [
        AppRoutingModule
    ],
    providers: [],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomepageComponent,
        ProductsComponent,
        ProductlistComponent,
        ContactUsComponent,
        LoginSignupComponent
    ]
})
export class DreamModule { }
