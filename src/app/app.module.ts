import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NGprime
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';


@NgModule({
    declarations: [
        AppComponent,
        MenubarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StyleClassModule,
        CommonModule,
        AppRoutingModule,
        ButtonModule,
        MenubarModule,
        BadgeModule,
        AvatarModule,
        InputTextModule,
        RippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
