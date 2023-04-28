import { spyOn } from 'jest-mock';
import { of } from 'rxjs';
import { ClockService } from '../core/services/clock.service';
import { DigitalClockComponent } from './digital-clock.component';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let clockService: ClockService;

  beforeEach(() => {
    clockService = new ClockService();
    component = new DigitalClockComponent(clockService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should update the current time when the clock service emits a new time', () => {
    const date = new Date(2023, 3, 1, 13, 45, 30);

    spyOn(clockService, 'getTime').mockReturnValue(of(date));

    component.ngOnInit();

    expect(component.currentTime).toEqual(date);

    component.ngOnDestroy();
  });
});
