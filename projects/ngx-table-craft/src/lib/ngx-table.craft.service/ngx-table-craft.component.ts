import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgxTableCraftService } from '../ngx-table-craft.service';
import { IService } from '../interfaces/i-service';
import { IConfigs } from '../interfaces/i-configs';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'ngx-table-craft',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, PaginationComponent ],
  templateUrl: './ngx-table-craft.componet.html',
  styles: `
      .no-select {
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
      }
    `,
})
export class NgxTableCraft<T> implements OnInit, AfterViewInit{
 
  @Input() configs!: IConfigs;
  @Input() service!: IService<T>;
  @Input() objs!: T[];

  sortedColumn: string | null = null;
  sortOrder: 'asc' | 'desc' = 'asc';
  page: number = 1;
  itemsPerPage: number = 5;
  itemsPerPageOptions: number[] = [5, 10, 25, 50];
  totalPages: number = 0;
  pages: number[] = [];

  ngOnInit(): void {
    if (!this.objs) {
      this.objs = this.service.all();
    }
  }

  ngAfterViewInit(): void {
    this.calculatePages();
  }

  getData(obj: any): any[] {
    let data: any[] = new Array(this.configs.properties.length).fill(null);

    for (const key in obj) {
      const index = this.configs.properties.indexOf(key);
      if (index !== -1) {
        data[index] = obj[key];
      }
    }
    return data;
  }

  sortData(column: string): void {
    if (this.sortedColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortOrder = 'asc';
    }

    this.objs.sort((a: any, b: any) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  onItemsPerPageChange(event: any): void {
    this.itemsPerPage = event.target.value;
    this.page = 1; 
    this.calculatePages();
  }

  calculatePages(): void {
    this.totalPages = Math.ceil(this.objs.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}
