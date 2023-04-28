import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private time$ = new BehaviorSubject<Date>(new Date());

  constructor() {
    interval(1000).subscribe(() => this.setTime());
  }

  getTime() {
    return this.time$.asObservable();
  }

  private setTime() {
    this.time$.next(new Date());
  }
}
