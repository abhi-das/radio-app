import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgrammEntity, Programms } from '../state/programms.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProgrammService {
  constructor(private _httpClient: HttpClient) {}

  findAllProgramms(): Observable<ProgrammEntity[]> {
    return this._httpClient
      .get<Programms>('./assets/mock-data/program-data.json')
      .pipe(map((res) => res.programms));
  }
}
