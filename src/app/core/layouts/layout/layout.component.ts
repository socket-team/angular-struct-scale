import { Component, OnInit } from '@angular/core';
import { select } from "@angular-redux/store";
import { Observable } from 'rxjs';
import { Action } from '../../redux-store';
declare var $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @select() device$: Observable<any>;
  isShowNavbar: boolean = true;
  constructor(
    private action: Action
  ) {
    this.checkPageAndDevice();
  }

  ngOnInit() {
    this.setInterval();
    this.whenScroll();
  }

  setInterval() {
    let a = setInterval(_=>{
      if($(".gmoGroupHeader").length !== 0) {
        $(".gmoGroupHeader").css("display","flex");
        clearInterval(a);
      }
    },200);
  }

  whenScroll() {
    var lastScrollTop = 0;
    let __this = this;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
        __this.isShowNavbar = false;
      } else {
        __this.isShowNavbar = true;
      }
      lastScrollTop = st;
    });
  }

  checkPageAndDevice() {
    if (location.pathname === '/') {
      if ($(window).width() > 768) {
        this.action.update({ device: 'PC' })
      } else {
        this.action.update({ device: 'SP' })
      }
    } else {
      this.action.update({ device: 'OTHER' });
    }
  }
}
