import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectPageComponent } from './project-page/project-page.component';

// check this and make a module out of it
const routes: Routes = [
  { path: '', component: HomePageComponent  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'project-page',  component: ProjectPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
