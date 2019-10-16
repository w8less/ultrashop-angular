import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  socials: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['image', 'title', 'link', 'edit', 'delete'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ecDirectorService: EcDirectorService) { }

  ngOnInit() {
    this.getSocials();
  }

  getSocials() {
    this.ecDirectorService.getSocials().subscribe((resp: any) => {
      console.log(resp);
      this.socials = resp;
      this.dataSource = new MatTableDataSource(resp.results);  
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteSocial(id) {
    this.ecDirectorService.deleteSocial(id).subscribe(() => this.getSocials());
  }

}
