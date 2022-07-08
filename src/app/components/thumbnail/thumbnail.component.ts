import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() heroCard: any| undefined;
  
  arrObject:any;
  recruited:boolean = false; 

  constructor() {
  }
  ngOnInit(): void {
    
  }

  addTeam(h:any){
    let team = JSON.parse(localStorage.getItem('team')|| '{}');
    this.arrObject = JSON.parse(localStorage.getItem('hero')|| '{}');
    this.arrObject = Object.values(this.arrObject);
    if(this.arrObject.length<6 && team.name!== undefined && team.description!== undefined){
      this.arrObject.push(h);
      localStorage.setItem('hero',JSON.stringify(this.arrObject));
    }
  }
}
