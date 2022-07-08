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
  constructor(private heroService:HeroService,
    private comicsService: ComicsService, private activatedRoot:ActivatedRoute ) { 
  }

  ngOnInit(){
    this.activatedRoot.params.subscribe(async params =>{
      console.log(params.id)
      let heroInfo =  await this.heroService.getHeroById(params.id);
      this.hero = heroInfo.data.results[0];
      console.log(heroInfo.data.results[0]);

      let comicsArr = await this.comicsService.getComicsById(params.id);
      this.comics = comicsArr.data.results;
      console.log(comicsArr.data.results);
    });
  }

  addTeam(id:number){
    // let hero = JSON.parse(localStorage.getItem('hero')|| '{}');
    // if(hero>6){
      this.arrHero.push(id);
      // localStorage.setItem('hero',JSON.stringify(this.addTeam));
      console.log(this.arrHero);
    // }
    // console.log(id);
  }

}
