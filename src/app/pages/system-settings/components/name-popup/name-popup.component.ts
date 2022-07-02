import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-name-popup',
  templateUrl: './name-popup.component.html',
  styleUrls: ['./name-popup.component.scss'],
})
export class NamePopupComponent implements OnInit {
  name: string = '';
  description: string = '';

  @Input() isAdd: string = '';
  @Input() editCard: any;
  @ViewChild(NgForm) nameForm!: NgForm;
  @Output() closePopUp = new EventEmitter<boolean>();
  constructor(private popupService: PopupService) {}

  ngOnInit(): void {
    if(this.isAdd=='edit')
    {
      this.name = this.editCard.name;
      this.description = this.editCard.description;
    }
  }

  onSubmit() {
    if(this.nameForm.valid)
    {
      this.isAdd=='edit'?this.popupService.add(this.nameForm.value,this.editCard.id):this.popupService.add(this.nameForm.value);
      this.closePopUp.emit();
    }
  }
}
