import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  baseRef:string;

  constructor(@Inject(DOCUMENT) private document) {
    console.log(location.pathname);
  }

  ngOnInit() {
    let bases = this.document.getElementsByTagName('base');
    this.baseRef = bases[0].baseURI;
  }

}
