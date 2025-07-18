import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { AdminroomMapComponent } from './src/app/components/adminroom-map/adminroom-map.component';
import { ManageStockComponent } from './components/manage-stock/manage-stock.component';
import { FinancialComponent } from './components/financial/financial.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { LimpiezaDashboardComponent } from './components/limpieza-dashboard/limpieza-dashboard.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';

export const routes: Routes = [
    {path: "", component: ConstruccionComponent},
    {path: "admin", component: AdminDashboardComponent, children: [
        {path: "", component: AdminroomMapComponent},
        {path: "stock", component: ManageStockComponent},
        {path: "financial", component: FinancialComponent},
        {path: "reports", component: ReportsComponent},
        {path: "rooms", component: RoomListComponent},
        {path: "limpieza", component: LimpiezaDashboardComponent}
    ]},
    {path: "limpieza", component: LimpiezaDashboardComponent},
    {path: "user", component: UserViewComponent},
    {path: "construccion", component: ConstruccionComponent}

];
