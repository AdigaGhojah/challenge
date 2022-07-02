import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private names: any = [];

  popupOpened = new EventEmitter<any>();

  constructor() {}

  add(data: any,id?:number) {
    if(id!==undefined)
    {
      this.names[id].name=data.name;
      this.names[id].description=data.description;
    }
    else{
      this.names.push({
        id: this.names.length,
        name: data.name,
        description: data.description,
      });
    }
  }

  edit(card: any) {
    this.names[card.name] = card;
  }

  delete(value:number) {
    this.names.splice(value,1);
  }

  getNames(): void {
    return this.names;
  }
}
