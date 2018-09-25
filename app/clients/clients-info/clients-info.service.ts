import { Injectable, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsInfoService  {
  @Input('clientName') clientName: string;
  tierData : any;


  constructor(private httpClient : HttpClient) { }
  // ngOnChanges(changes: SimpleChanges) {
  //   this.clientName = changes['clientName'].currentValue;
  //   console.log(this.clientName + "in tiers")
  //   this.getTier();
  // }
  // getTier(client:String) {
  //   this.httpClient.get('http://127.0.0.1:5000/getTier',{params:{data:this.client}}).subscribe(data => {
  //     console.log(data+"tier data");
  //     this.tierData = data[0]['tiers'];
  //     console.log(this.tierData+"tier data model");
      
      
  //   });
  // }
}
