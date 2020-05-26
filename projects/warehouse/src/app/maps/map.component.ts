import {Component} from '@angular/core';

@Component({
  selector: 'map-root',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
// This map component has api-key issue. So not implemented fully.
export class MapComponent{
  lat: number = 51.678418;
  lng: number = 7.809007;
}
