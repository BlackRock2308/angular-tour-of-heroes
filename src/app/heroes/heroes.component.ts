import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];

  
  constructor(private heroService : HeroService, private messageService : MessageService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {

    this.heroService.getMyHeroes() //souscrit à un observable renvoyant par le getmyHeros qui est dans HeroService
    .subscribe(heroes => this.heroes = heroes);
  }


  

  

}
