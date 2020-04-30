import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutmeComponent,
    ServicesComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
