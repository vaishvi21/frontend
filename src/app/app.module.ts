import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
//import { TableComponent } from './components/table/table.component';
//import { HeaderComponent } from './components/header/header.component';
// import {MatTableModule} from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
// import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './components/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  // exports: [
  //   MatTabsModule
  // ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
