import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() heroCard: any| undefined;

  constructor() { }

  arrHero: number[] = [];
  ngOnInit(): void {
  }

  addTeam(h:any){
    let team = JSON.parse(localStorage.getItem('team')|| '{}');
    console.log(team.name);
    let arrObject = JSON.parse(localStorage.getItem('hero')|| '{}');
    console.log(arrObject)
    arrObject =Object.values(arrObject);
    if(arrObject.length<6 && team.name!== undefined && team.description!== undefined){
      arrObject.push(h);
      localStorage.setItem('hero',JSON.stringify(arrObject));
      console.log(arrObject);
    }
    console.log(h);
  }
}
