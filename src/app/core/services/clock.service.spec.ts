import { ClockService } from './clock.service';

describe('ClockService', () => {
  let service: ClockService;

  beforeEach(() => {
    service = new ClockService();
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should return the current time', (done) => {
    service.getTime().subscribe((time) => {
      expect(time).toBeInstanceOf(Date);
      done();
    });
  });
});
