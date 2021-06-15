import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/modules/login/components/login/login.component';
import { AdminGuard } from 'src/shared/guards/admin.guard';
import { LoginGuard } from 'src/shared/guards/login.guard';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        canActivate: [LoginGuard]
    },
    {
      path: 'users',
      component: ContainerComponent,
      loadChildren: () => import('./../modules/users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'login',
      component: LoginComponent
  },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }