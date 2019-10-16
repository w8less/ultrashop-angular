import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOn: boolean = false; 
  image: string;
  user: any;
  first_name: string;
  email: string;

  constructor(public authentication: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  menu() { 
    // $(this).toggleClass('icon-menu');
    // $(this).toggleClass('icon-cross');
    // $('nav').toggleClass('down');
    // $('nav li a').removeClass('down');
    // $('.icon-search').removeClass('icon-cross'); 
    $(".userNav").fadeIn()
  }

  navLi(){
    $('.menu').addClass('icon-menu');
    $('.menu').removeClass('icon-cross');
    $('nav').toggleClass('down');
  }
  
  hideMenu(){
    // setTimeout(function(){
    //   $('nav').removeClass('down');
    // }, 1000)
    $(".userNav").fadeOut()
    
  }
  
  logOut() {
    this.authentication.logout();
  }
}
