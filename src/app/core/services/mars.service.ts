import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarsPhotosResponse, Photo } from 'src/app/shared/interfaces/mars.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarsService {

  constructor(private http: HttpClient) { }

  getMarsPhotos(): Observable<MarsPhotosResponse>{

    return this.http.get<MarsPhotosResponse>(
      `${environment.BASE_URL}/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=${environment.API_KEY}`)
  }

  getMarsPhotosFilter( filter: any ): Observable<any>{

    return this.http.get<any>(
      `${environment.BASE_URL}/mars-photos/api/v1/rovers/${filter}/photos?sol=1000&api_key=${environment.API_KEY}`)
  }

}
