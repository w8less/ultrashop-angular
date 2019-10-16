import { Component, OnInit, ViewChild } from '@angular/core';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


export interface UserValues {
  first_name: string;
  last_name: string;
  tel: string;
  email: string;
  new_password: string;
  new_password_confirm: string;
}
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit {
  users: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['image','first_name', 'last_name', 'tel', 'email', 'edit', 'delete'];
  
  constructor(private ecDirectorService: EcDirectorService) { }
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.ecDirectorService.getUsers().subscribe((resp: any) => {
      console.log(resp);
      this.users = resp;
      this.users.results.forEach(e => {
        e.imageStyle = {
          background: `url(${e.image}) no-repeat center / cover`
        }
      })
      this.dataSource = new MatTableDataSource(resp.results);  
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getNext(event: PageEvent) {
    this.ecDirectorService.getUsers(`?limit=${event.pageSize}&offset=${event.pageSize * event.pageIndex}`).subscribe((resp: any) => {
      resp.results.forEach(e => {
        e.imageStyle = {
          background: `url(${e.image}) no-repeat center / cover`
        }
      })
      this.dataSource = new MatTableDataSource(resp.results);
    });
  }

  deleteUser(id) {
    this.ecDirectorService.deleteUser(id).subscribe(() => this.getUsers());
  }


}
