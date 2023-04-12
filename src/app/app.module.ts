import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { PanelComponent } from './components/panel/panel.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import {ToDoService} from "./services/toDoService/to-do.service";
import {HttpClientModule} from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from "./store/effects/app.effects";
import {AppFacade} from "./store/facade/app.facade";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ToDoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [ToDoService, AppFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
