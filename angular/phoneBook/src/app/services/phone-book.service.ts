import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { phoneBookModel } from '../models/phoneBook.model';
import { EntryModel } from '../models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  public GetAll(): Observable<phoneBookModel[]>{
    return this.httpClient.get<phoneBookModel[]>(`${this.baseUrl}/api/PhoneBook/GetAll`,{
      headers: {
          'Content-Type': 'application/json'
      }
  })
  }

  public addEntry(model: EntryModel): Observable<number>{
    return this.httpClient.post<number>(`${this.baseUrl}/api/PhoneBook/AddEntry`,model,{
      headers: {
          'Content-Type': 'application/json'
      }
  } );
  }

  public AddPhoneBookWithEntry(model:phoneBookModel){
    return this.httpClient.post<number>(`${this.baseUrl}/api/PhoneBook/CreatePhoneBookEntry`,model,{
      headers: {
          'Content-Type': 'application/json'
      }
  } );
  }
}
