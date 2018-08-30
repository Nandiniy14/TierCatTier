import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staticfees',
  templateUrl: './staticfees.component.html',
  styleUrls: ['./staticfees.component.css']
})
export class StaticfeesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'value'];
  // dataSource = new MatTableDataSource([
  //   {name: 'Admin', value: 'LHADMIN'},
  //   {name: 'ITV', value: 'LHITV'},
  //   {name: 'Photos', value: 'LHREVIEWER'},
  //   {name: 'State NY', value: ''},
  //   {name: 'Erroneous', value: 'LHRERON'},
  //   {name: 'ErroneousAdmin', value: ''}
  // ]);
  dataObj : any;

  constructor(private router: Router, private httpClient: HttpClient) { 
    this.getData();
  }

  onAdd(){
    this.router.navigate(['staticfees/add']);
  }

  getData() {
    this.httpClient.get('http://127.0.0.1:5000/get').subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj);
      
    });
    
    }


  ngOnInit() {
  }

}
