import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ContainerComponent} from "./home/container/container.component";
import {BackupComponent} from "./home/backup/backup.component";
import {ConnectiondbComponent} from "./home/connectiondb/connectiondb.component";
import {DiskspaceComponent} from "./home/diskspace/diskspace.component";
import {ErrororaComponent} from "./home/errorora/errorora.component";
import {InformixComponent} from "./home/informix/informix.component";
import {JobmssqlComponent} from "./home/jobmssql/jobmssql.component";
import {MonitoringComponent} from "./home/monitoring/monitoring.component";
import {MysqlComponent} from "./home/mysql/mysql.component";
import {PerforamanceComponent} from "./home/perforamance/perforamance.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ComptemComponent} from "./home/comptem/comptem.component";
import {CompteuComponent} from "./home/compteu/compteu.component";
import {ChatComponent} from "./home/chat/chat.component";
import {ChangeComponent} from "./home/change/change.component";
import {TestComponent} from "./test/test.component";
import {AuthGuard} from "./services/auth.guard";
import {OthersComponent} from "./home/others/others.component";
import {HomeeComponent} from "./homee/homee.component";
import {BackupeComponent} from "./homee/backupe/backupe.component";
import {ConnectiondbeComponent} from "./homee/connectiondbe/connectiondbe.component";
import {ContainereComponent} from "./homee/containere/containere.component";
import {DiskspaceeComponent} from "./homee/diskspacee/diskspacee.component";
import {JobmssqleComponent} from "./homee/jobmssqle/jobmssqle.component";
import {MonitoringsComponent} from "./homee/monitorings/monitorings.component";
import {MysqleComponent} from "./homee/mysqle/mysqle.component";
import {OtherszComponent} from "./homee/othersz/othersz.component";
import {PerformanceeComponent} from "./homee/performancee/performancee.component";
import {InformixeComponent} from "./homee/informixe/informixe.component";

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"test",component:TestComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"homee",component:HomeeComponent , children:[{
      path:'backupe',component:BackupeComponent
    },
      {
        path:'Connetione',component:ConnectiondbeComponent
      },
      {
        path:'',component:ContainereComponent
      },
      {
        path:'diskspacee',component:DiskspaceeComponent
      },
      {
        path:'errorae',component:ErrororaComponent
      },
      {
        path:'informixe',component:InformixeComponent
      },
      {
        path:'jobmssqle',component:JobmssqleComponent
      },
      {
        path:'monitorings',component:MonitoringsComponent
      },
      {
        path:'mysqle',component:MysqleComponent
      },
      {
        path:'othersz',component:OtherszComponent
      },
      {
        path:'performancee',component:PerformanceeComponent
      },


    ]},
  {path:"home",component:HomeComponent ,canActivate:[AuthGuard],children:[
      {
        path:'',component:ContainerComponent
      },

      {
        path:'change',component:ChangeComponent
      },
      {
        path:'backup',component:BackupComponent
      },
      {
        path:'connection',component:ConnectiondbComponent
      },
      {
        path:'disk',component:DiskspaceComponent
      },
      {
        path:'error',component:ErrororaComponent
      },
      {
        path:'informix',component:InformixComponent
      },
      {
        path:'job',component:JobmssqlComponent
      },
      {
        path:'monitoring',component:MonitoringComponent
      },
      {
        path:'mysql',component:MysqlComponent
      },
      {
        path:'performance',component:PerforamanceComponent
      },
      {
        path:'container',component:ContainerComponent
      },
      {
        path:'comptem',component:ComptemComponent
      },
      {
        path:'compteu',component:CompteuComponent
      },
      {
        path:'chat',component:ChatComponent
      },
      {
        path:'others',component:OthersComponent
      }



    ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
