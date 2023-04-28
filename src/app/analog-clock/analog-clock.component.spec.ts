import { AnalogClockComponent } from './analog-clock.component';
import { of } from 'rxjs';
import { ClockService } from '../core/services/clock.service';
import { spyOn } from 'jest-mock';

describe('AnalogClockComponent', () => {
  let component: AnalogClockComponent;
  let clockService: ClockService;

  beforeEach(() => {
    clockService = new ClockService();
    component = new AnalogClockComponent(clockService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should update the clock hands when the clock service emits a new time', () => {
    const date = new Date(2023, 3, 1, 13, 45, 30);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    spyOn(clockService, 'getTime').mockReturnValue(of(date));

    component.ngOnInit();

    expect(component.hourHandStyle.transform).toEqual(
      `translate3d(-50%, 0, 0) rotate(${hour * 30 + minute / 2}deg)`
    );
    expect(component.minuteHandStyle.transform).toEqual(
      `translate3d(-50%, 0, 0) rotate(${minute * 6}deg)`
    );
    expect(component.secondHandStyle.transform).toEqual(
      `translate3d(-50%, 0, 0) rotate(${second * 6}deg)`
    );

    component.ngOnDestroy();
  });
});
