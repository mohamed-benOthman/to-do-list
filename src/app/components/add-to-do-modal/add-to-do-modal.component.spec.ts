import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoModalComponent } from './add-to-do-modal.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../../store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "../../store/effects/app.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppFacade} from "../../store/facade/app.facade";

describe('AddToDoModalComponent', () => {
  let component: AddToDoModalComponent;
  let fixture: ComponentFixture<AddToDoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDoModalComponent ],
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

    fixture = TestBed.createComponent(AddToDoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
