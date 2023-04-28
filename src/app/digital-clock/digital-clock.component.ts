import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClockService } from '../core/services/clock.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  public currentTime!: Date;
  public clockSubscription: Subscription = new Subscription();

  constructor(private clockService: ClockService) {}

  ngOnInit(): void {
    this.clockSubscription = this.clockService.getTime().subscribe((date) => {
      this.currentTime = date;
    });
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
  }
}
