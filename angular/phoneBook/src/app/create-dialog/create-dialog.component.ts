import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { phoneBookModel } from '../models/phoneBook.model';
import { PhoneBookService } from '../services/phone-book.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  phoneBookId:number = null;
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<CreateDialogComponent>, private fb: FormBuilder,private phoneBookService: PhoneBookService) {

    this.form = fb.group({
      phoneBookName: ["", Validators.required],
      entryName: ["", Validators.required],
      entryPhoneNumber: ["", Validators.required]
  });

   }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    if(this.form.invalid){
      return;
    }

    var model = {
      name: this.form.get("phoneBookName").value,
      entries: [
        {
          name: this.form.get("entryName").value,
          phoneNumber: this.form.get("entryPhoneNumber").value,
          phoneBookId: (this.phoneBookId)? this.phoneBookId : 0

        }
      ]

    } as phoneBookModel;

    if(this.phoneBookId){
      //call add entry
    }else{

      this.phoneBookService.AddPhoneBookWithEntry(model).subscribe(c => {
        if(c){
         
          this.dialogRef.close();

        }
      })
    }
  }

}
