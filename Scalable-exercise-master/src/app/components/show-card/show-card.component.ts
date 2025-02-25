import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interfaces';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-show-card',
  imports: [NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {

  @Output()
  onDeleteEvent = new EventEmitter<string>();

  @Input()
  show : Show = {
    name: "",
    image: "",
    description : ""
  }

  isSelected: boolean = false;

  onSelected(): void{
    this.isSelected = !this.isSelected;
  }

  onDelete(): void{
    this.onDeleteEvent.emit(this.show.name);
  }
}