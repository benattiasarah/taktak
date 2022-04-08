import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { CommandesAdminComponent } from './commandes-admin/commandes-admin.component';
import { CompteLivAdminComponent } from './compte-liv-admin/compte-liv-admin.component';
import { CompteClientAdminComponent } from './compte-client-admin/compte-client-admin.component';
import { PaiementAdminComponent } from './paiement-admin/paiement-admin.component';
import { CreateAccountAdminComponent } from './create-account-admin/create-account-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AcceuilAdminComponent,
    CommandesAdminComponent,
    CompteLivAdminComponent,
    CompteClientAdminComponent,
    PaiementAdminComponent,
    CreateAccountAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
