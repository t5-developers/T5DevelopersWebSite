import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ FooterComponent } from './footer/footer.component';
import{ HeaderComponent } from './header/header.component';
import{ CareersComponent } from './careers/careers.component';
import{ ServicesComponent } from './services/services.component';
import{ AboutComponent } from './about/about.component';
import{ ContactComponent } from './contact/contact.component';
import{ HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [{ path:"footer",component:FooterComponent},
{ path:"header",component:HeaderComponent},
{ path:"careers",component:CareersComponent},
{ path:"services",component:ServicesComponent},
{ path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"home",component:HomeComponent},
{path:"test",component:TestComponent},
{path:"T5Developers",component:PageComponent},
{ path: '',redirectTo: '/T5Developers',pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
