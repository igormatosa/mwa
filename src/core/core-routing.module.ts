import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent
    },
    {
      path: 'users',
      component: ContainerComponent,
      loadChildren: () => import('./../modules/users/users.module').then(m => m.UsersModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }