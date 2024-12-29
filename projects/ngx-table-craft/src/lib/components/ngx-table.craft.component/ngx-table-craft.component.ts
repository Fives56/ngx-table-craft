import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { IService } from '../../interfaces/i-service';
import { IConfigs } from '../../interfaces/i-configs';
import { TableComponent } from '../table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'ngx-table-craft',
  standalone: true,
  imports: [TableComponent, MatCardModule],
  templateUrl: './ngx-table-craft.componet.html',
  styleUrls: ['./ngx-table-craft.component.scss']
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
  @Input() data!: T[];

  /**
   * The column currently sorted.
   */
  sortedColumn: string | null = null;
  /**
   * Number of items to display per page.
   */
  itemsPerPage: number = 10;
  /**
   * Options for the number of items per page.
   */
  pageSizeOptions: number[] = [10, 20, 30, 40, 50];
  
  dataSource = new MatTableDataSource<T>();
  
  constructor(protected cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    if (!!this.service) {
      this.data = this.service.all();
    }
    this.dataSource.data = this.data

  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges()
  }
}
