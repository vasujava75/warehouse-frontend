import {Component, OnInit} from '@angular/core';
import {Vehicle, WarehouseService} from '../service/warehouse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  public vechileDetails: Vehicle;

  constructor(public warehouseService: WarehouseService, private router: Router) {
  }

  ngOnInit(): void {
    this.vechileDetails = this.warehouseService.getVechileDetails();
  }

  public saveToCart() {
    this.warehouseService.setShoppingCartList(this.vechileDetails);
    this.router.navigate(['shopping']);
  }

}
