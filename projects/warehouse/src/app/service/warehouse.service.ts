import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year_model: number;
  price: number;
  licensed: boolean;
  date_added: string;
  wareHouseName: string;
  wareHouseLocation: string;
}

@Injectable()
export class WarehouseService {
  constructor(
    private http: HttpClient) {
  }

  private vechileDetails: Vehicle;
  private shoppingCartList: Vehicle[] = [];
  private warehousesV1 = 'http://localhost:8080/warehouses/v1';

  public setVechileDetails(vechicle: Vehicle) {
    this.vechileDetails = vechicle;
  }

  public getVechileDetails(): Vehicle {
    return this.vechileDetails;
  }

  public getShoppingCartList(): Vehicle[] {
    return this.shoppingCartList;
  }

  public setShoppingCartList(vechicle: Vehicle) {
    this.shoppingCartList.push(vechicle);
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.warehousesV1);
  }

}
