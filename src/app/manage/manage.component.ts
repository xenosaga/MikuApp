import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  applyForm: FormGroup;


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.applyForm = this.fb.group({
      keyword:[""],
      value:[""],
      type:[""]
    });
  }

}
