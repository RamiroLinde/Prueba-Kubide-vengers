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

  addTeam(id:number){
    // let hero = JSON.parse(localStorage.getItem('hero')|| '{}');
    // if(hero>6){
      this.arrHero.push(id);
      let arrObject = Object.assign(this.arrHero);
      localStorage.setItem('hero',JSON.stringify(arrObject));
      console.log(this.arrHero);
    // }
    console.log(id);
  }
}
