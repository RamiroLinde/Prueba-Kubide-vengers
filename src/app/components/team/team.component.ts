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
  createTitle:string = 'Editar equipo';
  create:string= 'Editar';
  constructor() {
    this.team = [];
   }

  ngOnInit(): void {
    this.myTeam = JSON.parse(localStorage.getItem('team')|| '{}');
    console.log(this.myTeam);
    if(this.myTeam.name === undefined && this.myTeam.description === undefined){
      this.createTitle = "Crear equipo";
      this.create = "Crear";
    }

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
