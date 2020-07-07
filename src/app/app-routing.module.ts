import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobpostingComponent } from './jobposting/jobposting.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CustomComponent } from './custom/custom.component';
import { AcessComponent } from './acess/acess.component';
import { TemplatesComponent } from './templates/templates.component';
import { JobpostlistComponent } from './jobposting/jobpostlist/jobpostlist.component';
import { TechnicianComponent } from './technician/technician.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
},
{
  path: 'login', component: LoginComponent
},

  {
    path: 'register', component: NewUserComponent
  },
  {
    path: 'jobposting', component: JobpostingComponent
  },     
  {
    path: 'clientlogin', component: ClientLoginComponent
  },
  {
    path: 'custom', component: CustomComponent
  },
  {
    path: 'Acess', component: AcessComponent
  },
  {
    path: 'Template', component: TemplatesComponent
  },
  {
    path:'main',  component:SidenavComponent,
    children :[
      {path:'',redirectTo: 'jobposting', pathMatch: 'full'},
    {path:'jobposting',component:JobpostingComponent},
    {path:'candidate',component:CandidatesComponent},{
      path: 'custom', component: CustomComponent
    },
    {
      path: 'Acess', component: AcessComponent
    },
    {
      path: 'Template', component: TemplatesComponent
    },
    {
      path: 'jobpostlist', component: JobpostlistComponent
    },
    {
      path: 'technician', component: TechnicianComponent
    },
    {
      path: 'jobsearch', component: JobsearchComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
