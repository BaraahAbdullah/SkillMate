import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // ✅ أضف هذا

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { SkillsComponent } from './Pages/skills/skills.component';
import { ResultComponent } from './Pages/result/result.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ResultComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    CommonModule, // ✅ هنا
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
