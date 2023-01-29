import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RetirementPlanningComponent } from './retirement-planning/retirement-planning.component';
import { BudgetComponent } from './budget/budget.component';
import { PracticeComponent } from './practice/practice.component';
import { NgxEchartsModule } from 'ngx-echarts'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RetirementPlanningComponent,
    BudgetComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
