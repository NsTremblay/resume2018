import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  currentSection="";

  constructor(private route: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(){
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.currentSection = data.state.root.firstChild.data.section;
      }
    });
  }
}
