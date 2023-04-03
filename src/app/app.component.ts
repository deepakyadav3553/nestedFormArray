import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm = this.fb.group({
    fluidType1: this.fb.array([]),
  });
  constructor(private fb: FormBuilder) {}

  get fluidType1() {
    return this.myForm.get('fluidType1') as FormArray;
  }

  fluidArray(indx: number) {
    return this.fluidType1.at(indx).get('fluidType1Array') as FormArray;
  }

  ngOnInit(): void {}

  addFluidType1() {
    this.fluidType1.push(
      this.fb.group({
        fluidName: [''],
        fluidType1Array: this.fb.array([]),
      })
    );
  }

  addFluidArrayData(indx: number) {
    this.fluidArray(indx).push(
      this.fb.group({
        fluidType1ArrayName: [''],
      })
    );
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
