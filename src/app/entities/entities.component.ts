import { Component, OnInit } from '@angular/core';

import { MyEntitiesService } from './my-entities.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  public heading = 'My Entities';
  public entities: any[];
  private selectedEntity: {};
  public totalItems;
  public currentPage = 1;
  public smallnumPages = 0;
  public maxSize = 5;
  public itemsPerPage = 10;
  public errorMessage = '';
  public loading = false;
  public color = 'primary';
  public searchStr = '';
  public groupOpen = {};

  constructor(private entitiesService: MyEntitiesService) {}

  ngOnInit(): void {
    const json = {
        'status' : null,
        'creationDate' : {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'toDate': {
          'dateFormat': 'dd-MMM-yyyy'
        },
        'displayOnlyNew': null
      };

    const payload = JSON.stringify(json);

    this.loading = true;
    this.getEntities(payload);
  };

  getEntities(payload) {
    // promise version
    /*this.entitiesService.getEntities().then(
      entities => this.entities = entities
    );*/

    // observable version
    this.entitiesService.getEntities(payload).subscribe(
      entities => {
       this.entities = entities;
        this.loading = false;
      },
      error =>  {
       this.errorMessage = <any>error;
       this.loading = false;
      }

    );
  };

  onSelect(entity): void {
    console.log(entity);
    this.selectedEntity = entity;
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.currentPage);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  public rowToggle(event: any, index: number): void {
    this.groupOpen[index] = !this.groupOpen[index];
  }
}
