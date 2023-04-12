import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
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

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelComponent ],
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

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
