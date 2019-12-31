import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NavComponent } from './home/nav/nav.component';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './home/container/container.component';
import { BackupComponent } from './home/backup/backup.component';
import { ConnectiondbComponent } from './home/connectiondb/connectiondb.component';
import { DiskspaceComponent } from './home/diskspace/diskspace.component';
import { ErrororaComponent } from './home/errorora/errorora.component';
import { InformixComponent } from './home/informix/informix.component';
import { JobmssqlComponent } from './home/jobmssql/jobmssql.component';
import { MonitoringComponent } from './home/monitoring/monitoring.component';
import { MysqlComponent } from './home/mysql/mysql.component';
import { PerforamanceComponent } from './home/perforamance/perforamance.component';
import { OthersComponent } from './home/others/others.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ComptemComponent } from './home/comptem/comptem.component';
import { CompteuComponent } from './home/compteu/compteu.component';
import { ChatComponent } from './home/chat/chat.component';
import { ChangeComponent } from './home/change/change.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SearchPipe } from './services/search.pipe';
import { TestComponent } from './test/test.component';
import {FileUploadModule} from "ng2-file-upload";
import { HomeeComponent } from './homee/homee.component';
import { BackupeComponent } from './homee/backupe/backupe.component';
import { ChangeeComponent } from './homee/changee/changee.component';
import { ConnectiondbeComponent } from './homee/connectiondbe/connectiondbe.component';
import { ContainereComponent } from './homee/containere/containere.component';
import { DiskspaceeComponent } from './homee/diskspacee/diskspacee.component';
import { ErroraeComponent } from './homee/errorae/errorae.component';
import { InformixeComponent } from './homee/informixe/informixe.component';
import { JobmssqleComponent } from './homee/jobmssqle/jobmssqle.component';
import { MonitoringsComponent } from './homee/monitorings/monitorings.component';
import { MysqleComponent } from './homee/mysqle/mysqle.component';
import { OtherszComponent } from './homee/othersz/othersz.component';
import { PerformanceeComponent } from './homee/performancee/performancee.component';
import { NaveComponent } from './homee/nave/nave.component';
import { HeadereComponent } from './homee/headere/headere.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    ContainerComponent,
    BackupComponent,
    ConnectiondbComponent,
    DiskspaceComponent,
    ErrororaComponent,
    InformixComponent,
    JobmssqlComponent,
    MonitoringComponent,
    MysqlComponent,
    PerforamanceComponent,
    OthersComponent,
    InscriptionComponent,
    ComptemComponent,
    CompteuComponent,
    ChatComponent,
    ChangeComponent,
    SearchPipe,
    TestComponent,
    HomeeComponent,
    BackupeComponent,
    ChangeeComponent,
    ConnectiondbeComponent,
    ContainereComponent,
    DiskspaceeComponent,
    ErroraeComponent,
    InformixeComponent,
    JobmssqleComponent,
    MonitoringsComponent,
    MysqleComponent,
    OtherszComponent,
    PerformanceeComponent,
    NaveComponent,
    HeadereComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
