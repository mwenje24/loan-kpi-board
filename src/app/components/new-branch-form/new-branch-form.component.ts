import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-branch-form',
  templateUrl: './new-branch-form.component.html',
  styleUrls: ['./new-branch-form.component.css']
})
export class NewBranchFormComponent {

  @Output() cancelled = new EventEmitter();

  onCancel() {
    this.cancelled.emit();
  }

}
