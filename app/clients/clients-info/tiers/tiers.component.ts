import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, NgForm, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddCatTier } from '../tiers.model';
import { AddTier } from '../addtier.model';
import { HttpParams } from '@angular/common/http';
import { ClientsInfoService } from '../clients-info.service';
import {MatDialog,MatDialogConfig} from "@angular/material";


export interface CatTier {
  name: string;
}

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent implements OnInit,OnChanges {

  public myForm: FormGroup;
  @Output() selectedCatTier: string = '';
  dataObj : any;
  catTierData : any;
  catTierFees : any;
  catTierFeesNames : any;
  catTierObj : AddCatTier;
  tierDataObj : AddTier;
  tierData : any;
  catFeesNames:string[];
  submitted = false;
  @ViewChild('catTierForm') catTierForm: NgForm;
  
  @Input('clientName') clientName: string;
  catTierControl = new FormControl('', [Validators.required]);
  catTiers: CatTier[] = [
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
    // this.getCatTierFees();
    this.selectCatTier(event);
  }

  initlanguage() {
      return this._fb.group({
          min: [''],
          max: [''],
          sku: ['']
      });
  }
  
  selectCatTier(catTier) {
    this.selectedCatTier = catTier;
    console.log(this.selectedCatTier+"selectedCatTier5678");
  }
  
 

   getCatTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getCatTier',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data[0].cat_tier_fees);
      this.catTierFeesNames=Object.keys(data[0].cat_tier_fees);
      this.catTierData = data[0].cat_tier_fees;
      for(var i in this.catTierData) {
           console.log(i+"cat tier names data");
      }
      console.log(this.catTierData+"CATTIERFEES");
      
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
  

  // getCatTierFees(){
  //   this.httpClient.get('http://127.0.0.1:5000/getCatTierFees',{params:{data:this.clientName}}).subscribe(data => {
  //     console.log(data+"catTier Fees nAMES");
  //     this.catTierFeesNames = data[0]['cat_fees'];
  //     console.log(this.catTierFeesNames+"cattier fees dnaMES");
      
      
  //   });

  // }
  onCat() {
    this.submitted = true;
    
  } 

  //Method to display data of particular Cat Tier Fees, which is selected in the dropdown menu
  getCatTier(){
    console.log(this.selectedCatTier+"cattierForm Value");
    this.httpClient.get('http://127.0.0.1:5000/getCatTierData',{params:{data:this.clientName,data1:this.selectedCatTier}}).subscribe(data => {
      console.log(data['cat_fees']+"catTier Fees data");
      console.log(data);
      this.catTierFees = data[0]['cat_fees'];
      console.log(this.catTierFees[0].cat_fees+"cattier fees data model");
      
      
    });
  }



}
