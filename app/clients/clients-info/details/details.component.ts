
import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Details } from '../details.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {
  detailsArr:Details[]=[];
  dataObj:any;
  detailsObj : Details;
  @Input('clientName') clientName: string;
  @ViewChild('updateForm') updateForm: NgForm;
  
  


  constructor(private httpClient : HttpClient) {
    
    this.detailsObj = new Details;
    
   }

  
  ngOnInit() {
    
    console.log(this.clientName);
    this.dataObj=[];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "in details")
    this.getData();
  }

  getData() {
    const DATA = {'clientName':this.clientName}
    console.log(this.clientName+"getDataaaaa")
      this.httpClient.get('http://127.0.0.1:5000/getDetails',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj[0].clientName+"11111111");
      
    });
    
  }

  onUpdate(){
    alert("Updated Successfully");
    console.log('Form Submitted!', this.updateForm.value);
    this.httpClient.post('http://127.0.0.1:5000/update',this.updateForm.value).subscribe(data => {
          
          console.log(data);
          console.log("hello");
        })

  }
  

}