import { Component, Input, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/side-bar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() list:SideBarItem[]=[];
  @Input() sideBarTitle:string='' ;

  constructor() { }

  ngOnInit(): void {
  }

}
