import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClockService } from '../core/services/clock.service';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss'],
})
export class AnalogClockComponent implements OnInit, OnDestroy {
  public hourHandStyle: { transform: string } = { transform: '' };
  public minuteHandStyle: { transform: string } = { transform: '' };
  public secondHandStyle: { transform: string } = { transform: '' };

  public clockSubscription: Subscription = new Subscription();

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockSubscription = this.clockService
      .getTime()
      .subscribe((date: Date) => {
        this.updateAnalogClock(date);
      });
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }

  public updateAnalogClock(date: Date): void {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    this.hourHandStyle.transform = `translate3d(-50%, 0, 0) rotate(${
      hour * 30 + minute / 2
    }deg)`;
    this.minuteHandStyle.transform = `translate3d(-50%, 0, 0) rotate(${
      minute * 6
    }deg)`;
    this.secondHandStyle.transform = `translate3d(-50%, 0, 0) rotate(${
      second * 6
    }deg)`;
  }
}
