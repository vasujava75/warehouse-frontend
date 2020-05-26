import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../service/warehouse.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public totalPrice = 0;
  public noOfVechiles = 0;
  constructor(public warehouseService: WarehouseService) {}

  ngOnInit(): void {
    this.noOfVechiles = this.warehouseService.getShoppingCartList().length;
    this.warehouseService.getShoppingCartList().forEach(vechile => this.totalPrice = this.totalPrice + vechile.price);
  }

}
