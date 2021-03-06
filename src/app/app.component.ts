import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  paths = [
    111, 222, 333
  ];

  prefix = ['x', 'y', 123];

  onSubmit() {
    console.log(this.form);
  }
}
