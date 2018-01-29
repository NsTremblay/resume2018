import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill : string;
  skills : any[] = [];

  error : string;

  constructor(private http : Http) { 


  }

  ngOnInit() {
    //get the skills in the assets folder
    this.http.get('assets/json/skills.json').subscribe(
      (data) => this.skills = data.json(),
      (err) => this.error = err)
  }

}
