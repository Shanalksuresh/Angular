import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegisterationComponent } from './student-registeration/student-registeration.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // {
  //   path:"",component: AppComponent
  // },
  
  {
    path: 'std-reg', component: StudentRegisterationComponent
  },

  {
    path: 'std-list', component: StudentListComponent

  },
  { 
    path: 'home', component: HomeComponent },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  // {
  //   // path :'customers',
  //   // loadChildren: () =>import('/.Customers/Customers')
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
