import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
 
  @Input() page: number = 1;
  @Input() totalPages: number = 0;
  @Input() pages: number[] = [];
  @Output() pageChange = new EventEmitter<number>();

  currentPage = 1;

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
      currentPage = page;
    }
  }
  abs = Math.abs
  
}
