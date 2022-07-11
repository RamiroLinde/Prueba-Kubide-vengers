import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  edit:boolean = true;
  empty:boolean = false;
  constructor(private router: Router) {
    this.team = [];
   }

  ngOnInit(): void {
    this.heroTeam = JSON.parse(localStorage.getItem('hero')|| '{}');
    this.myTeam = JSON.parse(localStorage.getItem('team')|| '{}');
    if(this.myTeam.name !==undefined){
    this.edit = false;
    }
    
  }

  ngDoCheck(){
    this.myTeam = JSON.parse(localStorage.getItem('team')|| '{}');

  }

  dateTeam(pForm: any){
    console.log(pForm.value);
    if(pForm.value.name !==null && pForm.value.description !==null && pForm.value.description !=="" &&pForm.value.name !=="" ){
      this.team.push(pForm.value);
      localStorage.setItem('team',JSON.stringify(pForm.value));
      pForm.resetForm({});
      this.edit = false;
    }else{
      this.empty = true;
    }

  }
}
