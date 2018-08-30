import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddCatTier } from './addcattier.model';


@Component({
  selector: 'app-add-cat-tier',
  templateUrl: './add-cat-tier.component.html',
  styleUrls: ['./add-cat-tier.component.css']
})
export class AddCatTierComponent implements OnInit {

  addForm:FormGroup;
  llimit: FormControl;
  ulimit: FormControl;
  sku: FormControl;
  dataObj:AddCatTier;

  constructor(private router:Router,private httpClient:HttpClient) { 
    this.dataObj = new AddCatTier;
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.llimit = new FormControl('', [
      Validators.required
    ]);
    this.ulimit = new FormControl('', [
      Validators.required
    ]);
    this.sku = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.addForm = new FormGroup({
      llimit: this.llimit,
      ulimit: this.ulimit,
      sku: this.sku,
    });
  }


  ngOnInit() {
  }
  onSubmit(){
    console.log('Form Submitted!', this.addForm.value);
    this.dataObj.llimit= this.addForm.value.llimit;
    this.dataObj.ulimit = this.addForm.value.ulimit;
    this.dataObj.sku = this.addForm.value.sku;
    console.log(this.dataObj);
    this.router.navigate(['cat-tier/tier']);
    const DATA = {
      'llimit':this.dataObj.llimit,
      'ulimit':this.dataObj.ulimit,
      'sku':this.dataObj.sku
    }
    console.log(DATA+"1111");
    this.httpClient.post('http://127.0.0.1:5000/addCatTier',DATA).subscribe(data => {
          
          console.log(data);
          console.log("hello");
        })
  }
  }

