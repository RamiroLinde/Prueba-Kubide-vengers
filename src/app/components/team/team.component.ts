import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interface/team.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Team[];
  myTeam: any;
  heroTeam: any[] = [];
  constructor() {
    this.team = [];
   }

  ngOnInit(): void {
    this.heroTeam = JSON.parse(localStorage.getItem('hero')|| '{}');
  }

  ngDoCheck(){
    this.myTeam = JSON.parse(localStorage.getItem('team')|| '{}');
  }

  dateTeam(pForm: any){
    localStorage.clear();
    this.team.push(pForm.value);
    console.log(pForm.value);
    localStorage.setItem('team',JSON.stringify(pForm.value));
    pForm.resetForm({})
  }
}
