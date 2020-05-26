import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';

import {AppComponent} from './app.component';
import {WarehouseService} from './service/warehouse.service';
import {DisplayComponent} from './display/display.component';
import {AppRoutingModule} from './app.routing.module';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './maps/map.component';
import {MatDialogModule} from '@angular/material/dialog';
import {A11yModule} from '@angular/cdk/a11y';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DetailsComponent} from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import { ShoppingComponent } from './shopping/shopping.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptor} from "./interceptor/BasicAuthInterceptor";


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MapComponent,
    DetailsComponent,
    ShoppingComponent
  ],
  imports: [AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    A11yModule,
    NoopAnimationsModule,
    AgGridModule.withComponents([]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCC7gvS0HBCKxkN0EN-30we8Epvt7DKEEg'
    }), MatCardModule
  ],
  providers: [WarehouseService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
