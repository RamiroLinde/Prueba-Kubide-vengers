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
    console.log(this.heroList);

    // const heroId = await this.heroService.getHeroById(1009242);
    // console.log(heroId);
  }

  async search($event:any){
    if($event.target.value !==""){
      this.heroList = this.heroList.filter(hero=> hero.name.toLowerCase().includes($event.target.value.toLowerCase()));
    }else{
      const response = await this.heroService.getAll();
      this.heroList = response.data.results;
    }

  }

}
