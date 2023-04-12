import { TestBed } from '@angular/core/testing';

import { ToDoService } from './to-do.service';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../../store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "../../store/effects/app.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AppFacade} from "../../store/facade/app.facade";

describe('ToDoService', () => {
  let service: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [HttpClient]
    });
    service = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
