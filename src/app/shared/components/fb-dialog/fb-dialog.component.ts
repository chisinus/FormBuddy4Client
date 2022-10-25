import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogParameter } from '@shared/models/dialog-parameter';

@Component({
  selector: 'app-fb-dialog',
  templateUrl: './fb-dialog.component.html',
  styleUrls: ['./fb-dialog.component.scss'],
})
export class FormBuddyDialogComponent implements OnInit {
  parameter!: DialogParameter;
  titleStyle: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private param: DialogParameter,
    private dialogRef: MatDialogRef<FormBuddyDialogComponent>
  ) {
    if (!param) throw new Error('Param not passed');

    this.parameter = param;

    if (param.messageType === 'Error') this.titleStyle = 'errorTitle';
    else if (param.messageType === 'Success') this.titleStyle = 'successTitle';
    else this.titleStyle = 'messageTitle';
  }

  ngOnInit(): void {}

  onOKClick() {
    this.dialogRef.close(this.parameter.okReturnValue);
  }

  onCancelClick() {
    this.dialogRef.close(false);
  }
}
