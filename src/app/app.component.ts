import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  newForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newForm = this.fb.group({
      websiteLink: ['', Validators.required]
    })
  }


}
