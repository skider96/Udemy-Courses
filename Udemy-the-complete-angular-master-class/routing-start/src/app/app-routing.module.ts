import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
    { path: '' , component: HomeComponent },
    { path: 'users' , component: UsersComponent, children: [
      { path: ':id/:name' , component: UserComponent }
    ] },
    { path: 'users/:id/:name' , component: UserComponent },
    { path: 'servers' , 
    //canActivate: [AuthGuard]
    canActivateChild: [AuthGuard]
    , component: ServersComponent, children: [
      { path: ':id' , component: ServerComponent },
      { path: ':id/edit' , component: EditServerComponent }
    ]},
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found' } // Always need to be on the bottom of the array!
    ];
@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)
],
exports: [
    RouterModule
]
})
export class AppRoutingModule {

}