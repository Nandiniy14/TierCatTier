import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddCatTier } from '../tiers.model';
import { AddTier } from '../addtier.model';


@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent implements OnInit {

  public myForm: FormGroup;
  dataObj : any;
  catTierData : any;
  catTierObj : AddCatTier;
  tierDataObj : AddTier;
  tierData : any;
  submitted = false;

  

  constructor(private _fb: FormBuilder,private httpClient : HttpClient, private router: Router) { 
    this.catTierObj = new AddCatTier;
    this.tierDataObj = new AddCatTier;
    this.getCatTierData();
    this.getTierData();
  }

  ngOnInit() {
      this.myForm = this._fb.group({
          add: this._fb.array([
              this.initlanguage(),
          ])
      });
  }

  initlanguage() {
      return this._fb.group({
          llimit: [''],
          ulimit: [''],
          sku: ['']
      });
  }
  onAddTier(){
    // this.router.navigate(['tiers/addTier']);
  }
  
   getCatTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getCatTier').subscribe(data => {
      console.log(data);
      this.catTierData = data;
      console.log(this.catTierData);
      
    });
  }
 
  getTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getTier').subscribe(data => {
      console.log(data);
      this.tierData = data;
      // this.tierData.push(data);
      console.log(this.tierData);
      
    });
  }

  onCat() {
    this.submitted = true;
    // this.router.navigate(['tiers/addCatTier']);
  }



}
