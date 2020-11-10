import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMusicFestivals } from '../models/musicfestivals.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  // Replace with actual api
  getMusicFestives(): Observable<IMusicFestivals[]> {
    return this.http.get<IMusicFestivals[]>('/assets/dummy-data.json');
  }
}
