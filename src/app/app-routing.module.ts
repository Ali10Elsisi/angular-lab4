import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {path:"blogs",children:[
    {path:"",component:BlogListComponent},
    {path:"blog-details/:id",component:BlogDetailsComponent}
  ]},
  // {path:"",component:BlogListComponent},
  // {path:"blog-details/:id",component:BlogDetailsComponent},
  {path:"about-us",component:AboutUsComponent,canActivate:[AuthGuardGuard]},
  {path:"contact-us",component:ContactUsComponent},
  {path:"**",component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
