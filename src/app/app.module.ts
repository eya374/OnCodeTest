import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { ClockService } from './core/services/clock.service';

@NgModule({
  declarations: [AppComponent, DigitalClockComponent, AnalogClockComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ClockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
