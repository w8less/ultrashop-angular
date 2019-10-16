import { Component, OnInit, ViewChild } from '@angular/core';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  styleUrls: ['./all-groups.component.scss'],
})
export class AllGroupsComponent implements OnInit {
  groups: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['name', 'edit'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ecDirectorService: EcDirectorService) { }

  ngOnInit() {
  this.getGroups();
  }

  getGroups() {
    this.ecDirectorService.getGroups().subscribe((resp: any) => {
      console.log(resp.results);
      this.groups = resp;
      this.dataSource = new MatTableDataSource(resp.results); 
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
