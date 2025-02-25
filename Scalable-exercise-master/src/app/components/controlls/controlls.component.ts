import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controlls',
  imports: [],
  templateUrl: './controlls.component.html',
  styleUrl: './controlls.component.css'
})
export class ControllsComponent {
  
  @Output()
  deleteByIndexEvent = new EventEmitter<number>();

  @Output()
  deleteLastEvent = new EventEmitter<void>();

  @Output()
  orderByNameEvent = new EventEmitter<void>();

  deleteFirst():void{
    this.deleteByIndexEvent.emit(0);
  }

  deleteLast():void{
    this.deleteLastEvent.emit();
  }

  orderByName():void{
    this.orderByNameEvent.emit();
  }
}