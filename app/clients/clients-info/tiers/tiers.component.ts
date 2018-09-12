import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, NgForm, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddCatTier } from '../tiers.model';
import { AddTier } from '../addtier.model';
import { HttpParams } from '@angular/common/http';
import { ClientsInfoService } from '../clients-info.service';
import {MatDialog,MatDialogConfig} from "@angular/material";


export interface Animal {
  name: string;
}

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent implements OnInit,OnChanges {

  public myForm: FormGroup;
  dataObj : any;
  catTierData : any;
  catTierObj : AddCatTier;
  tierDataObj : AddTier;
  tierData : any;
  submitted = false;
  @Input('clientName') clientName: string;
  catTierControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    {name: 'cat_01_tier_fees'},
    {name: 'cat_02_tier_fees'},
    
  ];
  constructor(private _fb: FormBuilder,private httpClient : HttpClient, private router: Router, private dialog: MatDialog) { 
    this.catTierObj = new AddCatTier;
    // this.tierDataObj = new AddCatTier;
    
    
  }

  ngOnInit() {
    console.log(this.clientName+"in tiers client name");
    // this.getData();
      this.myForm = this._fb.group({
          add: this._fb.array([
              this.initlanguage(),
          ])
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "in tiers")
    this.getCatTierData();
    this.getTierData();
  }

  initlanguage() {
      return this._fb.group({
          min: [''],
          max: [''],
          sku: ['']
      });
  }
  

  
  

   getCatTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getCatTier',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data);
      this.catTierData = data[0]['cat_tier_fees'];
      console.log(this.catTierData);
      
    });
  }
 
  getTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getTier',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data+"tier data");
      this.tierData = data[0]['tiers'];
      console.log(this.tierData+"tier data model");
      
      
    });
    // this.clientInfo.getTier(this.clientName);
  }

  onCat() {
    this.submitted = true;
    
  }



}
