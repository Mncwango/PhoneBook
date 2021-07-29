import {Component, OnInit, ViewChild} from '@angular/core';
import {PhoneBookService} from './services/phone-book.service';
import {MatAccordion} from '@angular/material/expansion';
import {phoneBookModel} from './models/phoneBook.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CreateDialogComponent} from './create-dialog/create-dialog.component';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
    @ViewChild(MatAccordion)accordion : MatAccordion;
    phoneBook : phoneBookModel[] = [];
    displayedColumns : string[] = ["name", "phoneNumber"]
    constructor(private service : PhoneBookService, public dialog : MatDialog) {}
    ngOnInit(): void {
        this.GetData();
    }

    Create(phoneBookId : any) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        if (phoneBookId) {
            dialogConfig.data = {
                phoneBookId
            };
        }
        var dialogRef = this.dialog.open(CreateDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(c => {
            this.GetData();
        })

    }


    GetData() {
        this.service.GetAll().subscribe(c => {
            if (c) {
                this.phoneBook = c;
            }
        });
    }

}