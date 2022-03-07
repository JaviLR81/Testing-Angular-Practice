import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private http: HttpClient) { }


  getFakeData(){
    return this.http.get('...')
      .pipe(
          map( (resp:any) => resp['fakeData'])
      );
  }

}
