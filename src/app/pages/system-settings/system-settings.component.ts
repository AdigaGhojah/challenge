import { Component, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/side-bar-item';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent implements OnInit {

  sideBarList : SideBarItem[] =[];
  isPopupOpened: boolean=false;
  isAdd: string='';
  editCard:any;
  cards:any=[];

  constructor(
    private popupService:PopupService
  ) {
    this.sideBarList=[{text:'مجموعة المستلمين للجهات الخارجية',link:'./'}];
   }


  ngOnInit(): void {
    this.popupService.popupOpened.subscribe(
      (card:any)=>{
        this.openPopup(false);
        this.editCard =card;

      }
    )
  }


  openPopup(isAdd?:boolean){
    this.isPopupOpened=true;
    this.isAdd=isAdd?'add':'edit';
  }
  popupClosed(){
    this.cards = this.popupService.getNames();
    this.isPopupOpened=false;
  }

  filterCards(event: any){
    const data = this.popupService.getNames() as any;
    this.cards = data.filter((card:any)=>{
      return card.name.includes(event.target.value);
    })

  }

}
