import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { CommandesAdminComponent } from './commandes-admin/commandes-admin.component';
import { CompteClientAdminComponent } from './compte-client-admin/compte-client-admin.component';
import { CompteLivAdminComponent } from './compte-liv-admin/compte-liv-admin.component';
import { CreateAccountAdminComponent } from './create-account-admin/create-account-admin.component';
import { PaiementAdminComponent } from './paiement-admin/paiement-admin.component';


const routes: Routes = [
  { path: '', component: AcceuilAdminComponent },
  { path: 'commandes', component: CommandesAdminComponent },
  { path: 'client', component: CompteClientAdminComponent },
  { path: 'liv', component: CompteLivAdminComponent },
  { path: 'paiement', component: PaiementAdminComponent },
  { path: 'create', component: CreateAccountAdminComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule]
})
export class AppRoutingModule { }
