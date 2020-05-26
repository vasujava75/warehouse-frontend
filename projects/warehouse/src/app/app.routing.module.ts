import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DisplayComponent} from './display/display.component';
import {AppComponent} from './app.component';
import {MapComponent} from './maps/map.component';
import {DetailsComponent} from './details/details.component';
import {ShoppingComponent} from './shopping/shopping.component';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'display', component: DisplayComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: '', redirectTo: 'display', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, enableTracing: false})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
