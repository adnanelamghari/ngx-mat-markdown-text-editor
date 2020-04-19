import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({text: new FormControl('')});
  }

  submit(): void {
    console.log(this.formGroup.value)
  }

  change($event) {
    // console.log($event)
  }
}
