import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {

  @Input() card:any;
  @Input() index: number | undefined;

  constructor(private popupService:PopupService) { }

  ngOnInit(): void {
  }

  delete(value:any){
    this.popupService.delete(value);

  }

  edit(card:any){
    this.popupService.popupOpened.emit(card);
    // this.popupService.open();
    // this.nameService.edit(card);

  }

}
