import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  toggle = false;

  constructor(private router: Router) { }

  public today: Date = new Date();

  ngOnInit() {
    this.showSubMenu();
  }

  clickEvent() {
    this.toggle = !this.toggle;
  }

  showSubMenu() {
    $('.tabs').delegate('div:not(.current)', 'click', function() {
      $(this).addClass('current').siblings().removeClass('current')
          .parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
    });
  }
}
