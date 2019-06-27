import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-layout000',
  templateUrl: './layout000.component.html',
  styleUrls: ['./layout000.component.scss']
})
export class Layout000Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".gmoGroupHeader").hide();
    this.setInterval();
  }

  setInterval() {
    let a = setInterval(_=>{
      if($(".gmoGroupHeader").length !== 0) {
        $(".gmoGroupHeader").hide();
        clearInterval(a);
      }
    },200);
  }
}
