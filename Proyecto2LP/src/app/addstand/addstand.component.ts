import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-addstand',
  templateUrl: './addstand.component.html',
  styleUrls: ['./addstand.component.css']
})
export class AddstandComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  
  public get f():any{
    return this.form.controls;
  }
}
