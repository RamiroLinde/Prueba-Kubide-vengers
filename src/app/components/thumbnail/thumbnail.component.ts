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
    console.log()
   }
  ngOnInit(): void {
    
  }

  ngDoCheck(){
    
  }

  addTeam(h:any){
    let team = JSON.parse(localStorage.getItem('team')|| '{}');
    console.log(team.name);
    this.arrObject = JSON.parse(localStorage.getItem('hero')|| '{}');
    console.log(this.arrObject)
    this.arrObject = Object.values(this.arrObject);
    if(this.arrObject.length<6 && team.name!== undefined && team.description!== undefined){
      this.arrObject.push(h);
      localStorage.setItem('hero',JSON.stringify(this.arrObject));
      console.log(this.arrObject);
    }
    console.log(h);
  }
}
