import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomMaterialModules } from './custommaterial.modules';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntitiesComponent } from './entities/entities.component';

import { MyEntitiesService } from './entities/my-entities.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EntitiesFilterPipe } from './entities-filter.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModules,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EntitiesComponent,
    FooterComponent,
    HeaderComponent,
    EntitiesFilterPipe,
    PageNotFoundComponent
  ],
  providers: [ MyEntitiesService ],
  bootstrap: [AppComponent],
})

export class AppModule { }
