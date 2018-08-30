import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { AddStaticFee } from './addstaticfee.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addstaticfee',
  templateUrl: './addstaticfee.component.html',
  styleUrls: ['./addstaticfee.component.css']
})
export class AddstaticfeeComponent implements OnInit {

  addForm:FormGroup;
  addField: FormControl;
  value: FormControl;
  addedData : AddStaticFee;
  dataObj : AddStaticFee;

  constructor(private router:Router, private httpClient:HttpClient) { 
    this.dataObj = new AddStaticFee;
    this.createFormControls();
    this.createForm();
    
    
  }

  createFormControls() {
    this.addField = new FormControl('', [
      Validators.required
    ]);
    this.value = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.addForm = new FormGroup({
      addField: this.addField,
      value: this.value
    });
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log('Form Submitted!', this.addForm.value);
    this.dataObj.addField= this.addForm.value.addField;
    this.dataObj.value = this.addForm.value.value;
    console.log(this.dataObj);
    this.router.navigate(['staticfees/list']);
    const DATA = {
      'addField':this.dataObj.addField,
      'value':this.dataObj.value
    }
    console.log(DATA+"1111");
    this.httpClient.post('http://127.0.0.1:5000/addData',DATA).subscribe(data => {
          
          console.log(data);
          console.log("hello");
        })
  }

  

}
