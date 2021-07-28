import { Component, OnInit, ViewChild } from '@angular/core';
import { PhoneBookService } from './services/phone-book.service';
import {MatAccordion} from '@angular/material/expansion';
import { phoneBookModel } from './models/phoneBook.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(MatAccordion) accordion: MatAccordion;
  phoneBook:phoneBookModel[] = [];
  displayedColumns:string[] = ["name", "phoneNumber"]
  constructor(private service: PhoneBookService){

    
  }
  ngOnInit(): void {
   this.service.GetAll().subscribe(c => {
if(c){
  this.phoneBook = c;
}
   });
  }

}
