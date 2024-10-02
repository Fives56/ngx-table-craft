import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IConfigs, NgxTableCraft} from '../../../ngx-table-craft/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxTableCraft],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';
  objs = [
    {
      lastName: 'A',
      email: 'email@example.com',
      name: 'Pedro',
      age: 36,
    },
    {
      name: 'V',
      lastName: 'Manuel',
      email: 'email@example.col',
      age: 34,
    },
    {
      name: 'Pedro',
      lastName: 'Manuel',
      email: 'email@example.cos',
      age: 40,
    },
  ];

  configs: IConfigs = {
    title: 'Title Example',
    colsName: ['Nombre', 'Apellidos', 'Correo', 'Edad'],
    properties: ['name', 'lastName', 'email', 'age'],
  };
}
