import { Component } from '@angular/core';
import { NewBranchFormComponent } from '../new-branch-form/new-branch-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {

  titleHead = "Fortune Branches"
  buttonHeadName = "Add a Branch"

  showAddBranchForm = false;

  constructor(public dialog: MatDialog) {}

  closeDialog() {
    this.showAddBranchForm = false;
  }

  toggleAddBranch(){
    const dialogRef = this.dialog.open(NewBranchFormComponent, {
      data: {
        message: 'Create New Branch'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.onEdit(post);
      }
    });

    dialogRef.componentInstance.cancelled.subscribe(() => {
      this.closeDialog();
    });
  }

}
