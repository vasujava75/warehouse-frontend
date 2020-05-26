import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Vehicle, WarehouseService} from '../service/warehouse.service';
import {ColDef, GridOptions} from 'ag-grid-community';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public vechileDetails: Vehicle[] = [];
  public gridOptions = {
    rowSelection: 'single',
    suppressCellSelection: true,
    defaultColDef: {
      filter: true,
      resizable: true,
      sortable: false,
      onCellClicked: event => this.openDialog(event.data)
    },
    columnTypes: {
      'nonEditableColumn': {editable: false},
      'dateColumn': {
        valueFormatter: params => formatDate(params.value, 'yyyy-MM-dd', this.locale)
      }
    },
  } as GridOptions;
  public columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Year Model', field: 'year_model'},
    {headerName: 'Price', field: 'price'},
    {headerName: 'Licensed', field: 'licensed'},
    {headerName: 'Date Added', field: 'date_added', sortable: true, sort: 'asc'}
  ] as ColDef[];

  public ngOnInit(): void {
    const vechileDetailsList: Vehicle[] = [];
    this.wareHouseService.getVehicles().subscribe(vechileDetailsListData => this.vechileDetails = vechileDetailsListData);
  }

  constructor(@Inject(LOCALE_ID) private locale, private wareHouseService: WarehouseService,
              private router: Router) {
  }

  openDialog(vechileDetails: Vehicle) {
    this.wareHouseService.setVechileDetails(vechileDetails);
    if (vechileDetails.licensed === true) {
      this.router.navigate(['details']);
    } else {
      alert('This is not licensed');
    }
  }

}
