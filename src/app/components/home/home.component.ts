import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  heroList:any[];
  constructor(private heroService: HeroService) {
    this.heroList = [];
   }

  async ngOnInit(){
    const response = await this.heroService.getAll();
    this.heroList = response.data.results;

    const heroId = await this.heroService.getHeroById(1009242);
    console.log(heroId);
  }

}
