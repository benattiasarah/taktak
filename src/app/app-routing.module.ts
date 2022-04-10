import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { CommandesAdminComponent } from './commandes-admin/commandes-admin.component';
import { CompteClientAdminComponent } from './compte-client-admin/compte-client-admin.component';
import { CompteLivAdminComponent } from './compte-liv-admin/compte-liv-admin.component';
import { CreateAccountAdminComponent } from './create-account-admin/create-account-admin.component';
import { PaiementAdminComponent } from './paiement-admin/paiement-admin.component';
import { WithNavBarComponent } from './with-nav-bar/with-nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InscriComponent } from './inscri/inscri.component';
import { DemandeComponent } from './demande/demande.component';
import { AjouterComteComponent } from './ajouter-comte/ajouter-comte.component';
const routes: Routes = [
  { path: '', component: WithNavBarComponent ,children:[
    { path: '', component: AcceuilAdminComponent },
    { path: 'commandes', component: CommandesAdminComponent },
    { path: 'client', component: CompteClientAdminComponent },
    { path: 'liv', component: CompteLivAdminComponent },
    { path: 'paiement', component: PaiementAdminComponent },
    { path: 'create', component: CreateAccountAdminComponent },
    { path:'ajouter', component:AjouterComteComponent}
  ] },
  { path: 'login', component: LoginPageComponent },
  { path:'inscri', component:InscriComponent},
  { path:'demande', component:DemandeComponent}


 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule]
})
export class AppRoutingModule { }
