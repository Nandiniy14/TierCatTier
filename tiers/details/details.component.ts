import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Details } from '../details.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsArr:Details[]=[];
  dataObj : any;
  detailsObj : Details;
  @ViewChild('updateForm') updateForm: NgForm;
  
  // name: FormControl;
  // feeOwner: FormControl;
  // email: FormControl;
  // semail: FormControl;
  // created: FormControl;
  // modified: FormControl;
  // emailOpt: FormControl;
  // currency: FormControl;
  // carrier: FormControl;
  // exchange: FormControl;


  constructor(private httpClient : HttpClient) {
    this.getData();
    this.detailsObj = new Details;
    // this.createForm();
    // this.createFormControls();
   }

  //  createFormControls() {
  //   this.name = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.feeOwner = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.email = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.semail = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.created = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.modified = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.emailOpt = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.currency = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.carrier = new FormControl('', [
  //     Validators.required
  //   ]);
  //   this.exchange = new FormControl('', [
  //     Validators.required
  //   ]);

  // }

  // createForm() {
  //   this.updateForm = new FormGroup({
  //     name: this.name,
  //     feeOwner: this.feeOwner,
  //     email: this.email,
  //     semail: this.semail,
  //     created: this.created,
  //     modified: this.modified,
  //     emailOpt: this.emailOpt,
  //     currency: this.currency,
  //     carrier: this.carrier,
  //     exchange : this.exchange
  //   });
  // }

  ngOnInit() {
  }
  getData() {
    this.httpClient.get('http://127.0.0.1:5000/getDetails').subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj.clientFeesOwner+"heloopppp");
      //this.updateForm.reset(data);
      // for(var i in this.dataObj){
      //   console.log(this.dataObj.i.email+"email");
      // }
      
    });
  //  this.detailsObj.name = this.dataObj.clientName;
  //  console.log(this.detailsObj.name+"122343455");
  
  } 

  onUpdate(detailsObj:Details){
    console.log('Form Submitted!', this.updateForm.value);
    this.detailsObj.name = this.updateForm.value.name;
    this.detailsObj.feesOwner = this.updateForm.value.feeOwner;
    this.detailsObj.email = this.updateForm.value.email;
    this.detailsObj.semail = this.updateForm.value.semail;
    this.detailsObj.created = this.updateForm.value.created;
    this.detailsObj.modified = this.updateForm.value.modified;
    this.detailsObj.emailOpt = this.updateForm.value.emailOpt;
    this.detailsObj.currency = this.updateForm.value.currency;
    this.detailsObj.carrier = this.updateForm.value.carrier;
    this.detailsObj.exchange = this.updateForm.value.exchange;
  
    console.log(this.detailsObj.name+"1123435");
    // this.router.navigate(['cat-tier/tier']);
    const DATA = {
      'llimit':this.dataObj.llimit,
      'ulimit':this.dataObj.ulimit,
      'sku':this.dataObj.sku
    }
    console.log(DATA+"1111");
    this.httpClient.post('http://127.0.0.1:5000/update',this.updateForm.value).subscribe(data => {
          
          console.log(data);
          console.log("hello");
        })

  }
  

}
