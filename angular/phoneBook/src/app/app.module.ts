import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule, MatTableModule, MatToolbarModule, MatButtonModule,MatIconModule,MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [CreateDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
