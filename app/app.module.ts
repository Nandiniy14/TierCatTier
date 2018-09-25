import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularMaterialModule } from './core/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing.module';
// Services
import { AuthServices } from './core/auth/auth-service';
import { AuthGuardService } from './core/auth/Auth-guard-service ';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import { CatTierFeesComponent } from './clients/clients-info/cat-tier-fees/cat-tier-fees.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
   

  ],

  providers: [AuthServices, AuthGuardService],
  bootstrap: [AppComponent]


})
export class AppModule { }
