import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {

  @Input() name: string;
  link: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.link = this.sanitizer.bypassSecurityTrustResourceUrl('svg/md-' + this.name  + '.svg');
    console.log(this.link);
  }

}
