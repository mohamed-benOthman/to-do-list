import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PanelComponent} from "./components/panel/panel.component";
import {ToDoItemComponent} from "./components/to-do-item/to-do-item.component";
import {ToDoModalComponent} from "./components/to-do-modal/to-do-modal.component";
import {AddToDoModalComponent} from "./components/add-to-do-modal/add-to-do-modal.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "./store/effects/app.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {ToDoService} from "./services/toDoService/to-do.service";
import {AppFacade} from "./store/facade/app.facade";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PanelComponent,
        ToDoItemComponent,
        ToDoModalComponent,
        AddToDoModalComponent,
      ],
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
      providers: [ToDoService, AppFacade],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.textContent).toContain('To Do List');
  });
});
