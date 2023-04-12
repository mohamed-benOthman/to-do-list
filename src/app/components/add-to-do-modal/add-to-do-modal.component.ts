import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToDoService } from '../../services/toDoService/to-do.service';
import { AppFacade } from '../../store/facade/app.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-to-do-modal',
  templateUrl: './add-to-do-modal.component.html',
  styleUrls: ['./add-to-do-modal.component.scss'],
})
export class AddToDoModalComponent implements OnInit {
  addToDoForm: FormGroup;
  submitClicked = false;
  constructor(
    private formBuilder: FormBuilder,
    private toDoService: ToDoService,
    private appFacade: AppFacade,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addToDoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addToDoItem() {
    this.submitClicked = true;
    if (this.addToDoForm.valid) {
      const payload = {
        title: this.addToDoForm.get('title').value,
        description: this.addToDoForm.get('description').value,
        completed: false,
      };
      this.toDoService.addToDoItem(payload).subscribe((res) => {
        this.appFacade.setToDoList();
        this.modalService.dismissAll();
      });
    }
  }
}
