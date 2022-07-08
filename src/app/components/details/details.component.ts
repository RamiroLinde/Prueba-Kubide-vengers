import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from 'src/app/services/comics.service';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  arrHero: number[] = [];
  hero: any;
  comics: any[] = [];

  arrObject:any;
  recruited:boolean = false; 
  constructor(private heroService:HeroService,
    private comicsService: ComicsService, private activatedRoot:ActivatedRoute ) { 
  }

  ngOnInit(){
    this.arrObject = JSON.parse(localStorage.getItem('hero')|| '{}');
    this.arrObject = Object.values(this.arrObject);

    this.activatedRoot.params.subscribe(async params =>{
      this.arrObject.forEach((element:any) => {
        if(params.id === element.id.toString()){
            this.recruited = true;

        }
      });
  
      let heroInfo =  await this.heroService.getHeroById(params.id);
      this.hero = heroInfo.data.results[0];

      let comicsArr = await this.comicsService.getComicsById(params.id);
      this.comics = comicsArr.data.results;

    });
  }

  addTeam(h:any){
    let team = JSON.parse(localStorage.getItem('team')|| '{}');
    if(this.arrObject.length<6 && team.name!== undefined && team.description!== undefined){
      this.arrObject.push(h);
      localStorage.setItem('hero',JSON.stringify(this.arrObject));
      this.recruited = true;
    }
  }

  deleteTeam(id:any){
    let newArray = this.arrObject.filter((item:any) => item.id !== id);
    localStorage.setItem('hero',JSON.stringify(newArray));
    this.recruited = false;
  }

}
