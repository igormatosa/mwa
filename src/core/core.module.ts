import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ExponentialStrengthPipe } from 'src/shared/pipes/exponentialStrength.pipe';



@NgModule({
  declarations: [ContainerComponent, HeaderComponent, FooterComponent, MenuComponent, ExponentialStrengthPipe],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
