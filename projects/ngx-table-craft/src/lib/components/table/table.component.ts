import { Component, Input, AfterViewInit, ViewChild, SimpleChanges} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { IConfigs } from '../../interfaces/i-configs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'ngx-table',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
})
export class TableComponent<T> implements AfterViewInit{
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(Input, {static: true}) input!: any;

  @Input() configs!: IConfigs;
  @Input() dataSource!: MatTableDataSource<T>;
 
  /* Columns to show */
  displayedColumns!: string[];
  /*Columns name filter place holder*/
  filterPlaceHolder!: string;
  colspan: number = 40;

  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.setConfigs();
  }

  /* Set properties and table headers */
  setConfigs(){ 
    this.displayedColumns = this.configs.properties;
    this.colspan = this.displayedColumns.length;
    this.filterPlaceHolder = this.configs.headers.join(', ');
  }

  /* Apply filter in the table elements */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /* Execute a function when the row is clicked */
  onRowClick(row: T): void {
     if (this.configs.action) { 
      this.configs.action(row); 
    }
  }

  /** Get nested property */
  getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

}


