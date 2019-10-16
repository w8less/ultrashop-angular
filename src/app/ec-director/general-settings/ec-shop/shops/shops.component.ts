import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  shops: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['address','shop_name', 'edit', 'delete'];

  constructor(private ecDirectorService: EcDirectorService) { }
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    this.ecDirectorService.getAddresses().subscribe((shops: any) => {
      console.log(shops);
      this.shops = shops;
      this.dataSource = new MatTableDataSource(shops.results);  
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getNext(event: PageEvent) {
    this.ecDirectorService.getGroups(`?limit=${event.pageSize}&offset=${event.pageSize * event.pageIndex}`).subscribe((resp: any) => {
      this.dataSource = new MatTableDataSource(resp.results);
    });
  }

}
