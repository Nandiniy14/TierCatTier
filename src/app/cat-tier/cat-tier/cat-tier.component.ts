import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cat-tier',
  templateUrl: './cat-tier.component.html',
  styleUrls: ['./cat-tier.component.css']
})
export class CatTierComponent implements OnInit {
  displayedColumns: string[] = ['name', 'value'];
  dataObj : any;
  dataSource = new MatTableDataSource([
    {name: 'CatTier1', value: ''},
    {name: 'CatTier2', value: ''},
    {name: 'CatTier3', value: ''},
    {name: 'CatTier4', value: ''},
    {name: 'CatTier5', value: ''},
    {name: 'CatTier6', value: ''},
    {name: 'CatTier7', value: ''},
    {name: 'CatTier8', value: ''},
    {name: 'CatTier9', value: ''},
    {name: 'CatTier10', value: ''},
    {name: 'CatTier11', value: ''},
    {name: 'CatTier12', value: ''},
    {name: 'CatTier13', value: ''},
    {name: 'CatTier14', value: ''},
    {name: 'CatTier15', value: ''},
    {name: 'CatTier16', value: ''},
    {name: 'CatTier17', value: ''},
    {name: 'CatTier18', value: ''},
    {name: 'CatTierRange', value: ''},

  ]);

  constructor(private router: Router, private httpClient:HttpClient) {

   }

  ngOnInit() {
    this.getData();
  }
  onAddTier(){
    this.router.navigate(['cat-tier/addTier']);
  }
  getData() {
    this.httpClient.get('http://127.0.0.1:5000/getCatTier').subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj);
      
    });
  }
}

