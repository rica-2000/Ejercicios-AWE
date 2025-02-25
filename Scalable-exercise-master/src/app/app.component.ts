import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControllsComponent } from './components/controlls/controlls.component';
import { ShowCardComponent } from "./components/show-card/show-card.component";
import { Show } from './interfaces/show.interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ShowCardComponent, NgFor, ControllsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  shows : Show[] = [{
    "name": "Game of Thrones",
    "image": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    "description": "Nobles familias luchan por el control del Trono de Hierro en el continente de Poniente.",
  },
  {
    "name": "The Office",
    "image": "https://m.media-amazon.com/images/I/91d053F2aKL._AC_UF894,1000_QL80_.jpg",
    "description": "Un documental sobre la vida cotidiana de los empleados en una oficina de ventas de papel.",
  },
  {
    "name": "Friends",
    "image": "https://www.debate.com.mx/__export/1698600791542/sites/debate/img/2023/10/29/friends.jpg_423682103.jpg",
    "description": "Seis amigos navegan por la vida y el amor en Nueva York.",
  },
  {
    "name": "The Mandalorian",
    "image": "https://m.media-amazon.com/images/I/71bBDuXUvOL._AC_UF894,1000_QL80_.jpg",
    "description": "Un cazarrecompensas mandaloriano navega por la galaxia lejos de la autoridad de la Nueva República.",
  },
  {
    "name": "The Witcher",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfdUzjdZLK_9v2nmaabc5wsJydbBp2fBMsA&s",
    "description": "Un cazador de monstruos a sueldo lucha por encontrar su lugar en un mundo donde las personas son a menudo más perversas que las bestias.",
  }]

  deleteByIndex(index: number):void{
    this.shows.splice(index, 1);
  }

  deleteLast():void{
    this.shows.pop();
  }

  orderByName():void{
    this.shows.sort((a, b) => a.name.localeCompare(b.name));
  }

  deleteByName(name: string): void{
    console.log(name);
    const index = this.shows.findIndex(show => show.name === name);

    if(index != -1)
      this.deleteByIndex(index);
  }
}