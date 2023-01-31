import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-edithdeletestand',
  templateUrl: './edithdeletestand.component.html',
  styleUrls: ['./edithdeletestand.component.css']
})
export class EdithdeletestandComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  public get y():any{
    return this.form.controls;
  }

}
