import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { PagePrincipalComponent } from './Accueil/page-principal/page-principal.component';
import { PagePrincipalDetailPoduitComponent } from './detail-produits/page-principal-detail-poduit/page-principal-detail-poduit.component';
import { PagePrincipalToutsLesProduitsComponent } from './tous-les-produits/page-principal-touts-les-produits/page-principal-touts-les-produits.component';
import { ContenuComponent } from './tous-les-produits/contenu/contenu.component';
import { PageClientComponent } from './client/page-client/page-client.component';
import { SingUpComponent } from './client-sing-up/sing-up/sing-up.component';
import { pageSingUpClient } from './client-sing-up/page-sing-up-client/page-principal.component';

export const routes: Routes = [

    {
        path: 'page-principal', 
        component: PagePrincipalComponent, 
      },
      {
        path: 'page-principal-detail-produits/:id',
        component: PagePrincipalDetailPoduitComponent,
      },
      {
        path: 'page-principal-touts-les-produits',
        component: PagePrincipalToutsLesProduitsComponent,
      },
    
      {
        path: 'page-client',
        component: PageClientComponent,
      },
    
      {
        path: 'sing-up',
        component: pageSingUpClient,
      },
      
        
      
       
      {
        path: '**',
        redirectTo: '', 
      },


];
