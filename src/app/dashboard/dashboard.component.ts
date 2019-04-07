import { Component, OnInit } from '@angular/core';
import { TableService } from '../core/table.service';
import { Table } from '../table/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public newGroup:any = [] ;
  count=0;
  groupName;
  groupId;
  contacts: Table[];

  // add this config
  settings = {
    columns: {
      number: {
        title: 'MobileNo'
      },
      email: {
        title: 'EmailId'
      }
    }
  };

  constructor(private tservice: TableService) {}

  ngOnInit() {
    this.tservice.getData().subscribe((data: Table[]) => {
      this.contacts = data;
    });
  }

  createGroup(){
    this.newGroup.push({
      groupId: this.count++,
      groupName: "Ajith"
    });
  }

}
