import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemComponent } from './to-do-item.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {Store, StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../../store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "../../store/effects/app.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AppFacade} from "../../store/facade/app.facade";

describe('ToDoItemComponent', () => {
  let component: ToDoItemComponent;
  let fixture: ComponentFixture<ToDoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoItemComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument(),
        NgbModule,
        ReactiveFormsModule

      ],
      providers: [HttpClient, FormBuilder, HttpHandler, AppFacade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
