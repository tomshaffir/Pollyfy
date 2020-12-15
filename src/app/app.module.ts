import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainProfileComponent } from './Profile/main-profile.component';
import { ActivitiesComponent } from './Profile/activities/activities.component';
import { ProfileViewComponent } from './Profile/main-view-window/profile-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutBoxComponent } from './Profile/about-box/about-box.component';
import { SmallBarComponent } from './Profile/main-view-window/small-bar/small-bar.component';
import { ExpirationAllComponent } from './Profile/main-view-window/expiration-all/expiration-all.component';
import { DecisionComponent } from './Profile/main-view-window/decision/decision.component';
import { PrivacyComponent } from './Profile/main-view-window/privacy/privacy.component';
import { PollsViewComponent } from './Profile/main-view-window/polls-view/polls-view.component';
@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent,
    ActivitiesComponent,
    ProfileViewComponent,
    NavbarComponent,
    AboutBoxComponent,
    SmallBarComponent,
    ExpirationAllComponent,
    DecisionComponent,
    PrivacyComponent,
    PollsViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
