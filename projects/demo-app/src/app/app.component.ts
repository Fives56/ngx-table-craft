import { Component } from '@angular/core';
import {
  IConfigs,
  NgxTableCraft,
} from '../../../ngx-table-craft/src/public-api';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxTableCraft,
    MatIconModule,
    MatIconModule,
    MatDialogModule,
    ModalComponent,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  title = 'demo-app';
  data = [
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F' },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M' },
  ];

  sumAges(data: any) {
    let sum = 0;
    for (const element of data) {
      sum += element.age;
    }
    return sum / this.data.length;
  }

  openModal = (data: any): void => {
    const dialogRef = this.dialog.open(ModalComponent, { data: data });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('El modal se cerró con:', result);
    });
  };

  configs: IConfigs = {
    title: 'Title Example',
    class: 'container',
    headers: ['Nombre', 'Ciudad', 'Edad'],
    properties: ['name', 'city', 'age'],
    footers: ['Promedio de edades', '', (data: any[]) => this.sumAges(data).toFixed(2)],
    action: this.openModal,
  };
}
