import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddCatTier } from '../../cat-tier/add-cat-tier/addcattier.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-cat-tier',
  templateUrl: './add-cat-tier.component.html',
  styleUrls: ['./add-cat-tier.component.css']
})
export class AddCatTierComponent implements OnInit {

  catTierObj : AddCatTier;
  myForm:FormGroup;
  llimit: FormControl;
  ulimit: FormControl;
  sku: FormControl;
  constructor(private httpClient : HttpClient, private _fb: FormBuilder) { 
    this.catTierObj = new AddCatTier();
    
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

addTier() {
  const control = <FormArray>this.myForm.controls['add'];
  control.push(this.initlanguage());
}
  onSave(){
    console.log('Form Submitted!', this.myForm.value);
    console.log(this.myForm.value['add'][0]['llimit']);
    console.log(this.catTierObj.llimit+"234");
    
    for(var i in this.myForm.value['add']){
      this.catTierObj.llimit= i['llimit'];
      this.catTierObj.ulimit = i['ulimit'];
      this.catTierObj.sku = i['sku'];
      const DATA = {
        'llimit':this.catTierObj.llimit,
        'ulimit':this.catTierObj.ulimit,
        'sku':this.catTierObj.sku
      }

    }
      
    
    this.httpClient.post('http://127.0.0.1:5000/addCatTier',this.myForm.value['add']).subscribe(tierdata => {
          console.log(tierdata + "4444");
          console.log("hello");
        })

  }

}
