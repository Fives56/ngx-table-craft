import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IService } from '../interfaces/i-service';
import { IConfigs } from '../interfaces/i-configs';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'ngx-table-craft',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, PaginationComponent],
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
export class NgxTableCraft<T> implements OnInit, AfterViewInit {
  /**
   * Configuration settings for the table.
   */
  @Input() configs!: IConfigs;
  /**
   * Service for fetching data. This needs to be implemented.
   */
  @Input() service!: IService<T>;
  /**
   * Array of objects to be displayed in the table.
   */
  @Input() objs!: T[];

  /**
   * The column currently sorted.
   */
  sortedColumn: string | null = null;
  /**
   * The order of sorting: 'asc' for ascending, 'desc' for descending.
   */
  sortOrder: 'asc' | 'desc' = 'asc';
  /**
   * The current page number.
   */
  page: number = 1;
  /**
   * Number of items to display per page.
   */
  itemsPerPage: number = 5;
  /**
   * Options for the number of items per page.
   */
  itemsPerPageOptions: number[] = [5, 10, 25, 50];
  /**
   * Total number of pages.
   */
  totalPages: number = 0;
  /**
   * Array of page numbers.
   */
  pages: number[] = [];

  ngOnInit(): void {
    if (!this.objs) {
      this.objs = this.service.all();
    }
  }

  ngAfterViewInit(): void {
    this.calculatePages();
  }

  /**
   * Retrieves data for the table based on the configuration properties.
   * @param obj The object to extract data from.
   * @returns An array of data values.
   */
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

  /**
   * Sorts the data in the table based on the specified column.
   * @param column The column to sort by.
   */
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

  /**
   * Handles the change in the number of items per page.
   * @param event The event triggered by changing the items per page.
   */
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
