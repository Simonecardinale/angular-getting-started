import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes:Routes = [
  {path: "", redirectTo:"/welcome", pathMatch:'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component:ProductListComponent},
]

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, NavbarComponent, ProductListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
