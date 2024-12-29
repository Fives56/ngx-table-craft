# NgxTableCraft

`ngx-table-craft` is a component for _Angular 18_ that generates _dynamic tables_ using `Bootstrap` and `Angular Material`. It does this through a configuration object `configs` and an array of objects `data`

## Installation

To install the library, use npm:

```Bash
npm install ngx-table-craft
```

## Basic Usage

Import the module in your Angular application:

```TypeScript
import { NgxTableCraftModule } from 'ngx-table-craft';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTableCraftModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Example

Here is a basic example of how to use the library in your component:

```TypeScript

import { Component } from '@angular/core';
import { IConfigs } from 'ngx-table-craft';

@Component({
  selector: 'app-root',
  template: `
    <ngx-table-craft [data]="data" [configs]="configs"></ngx-table-craft>
  `
})
export class AppComponent {
  data = [
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  }
  ];

  sumAges() {
    let sum = 0;
    for (const element of this.data) {
      sum += element.age;
    }
    return sum / this.data.length;
  }

  configs: IConfigs = {
    title: 'User Table',
    colsName: ['Name', 'Age', 'City'],
    properties: ['name', 'age', 'city'],
    footers: ['Prom ages', '', this.sumAges()];
    action: (data: any) => alert(`You clicked ${data.name}`);
  };
}
```
## API
### Inputs
- configs: IConfigs - Configuration object for the table.
- service: IService<T> - Service for fetching data. This needs to be implemented.
- data: T[] - Array of objects to be displayed in the table.

## Configuration

The configuration should follow this structure:

```TypeScript
export interface IConfigs {
  title: string;
  headers: string[];
  properties: string[];
  footers: any[];
  action?: (data: any) => any;
}
```
- `title`: Table`s title.
- `headers`: The names of the columns in order to show.
- `properties`: The properties of the objects you will use. These are displayed in the same order as the array.
- `footers`: Table`s footer. You can cerate a dinamic footer with name as string and actions with functions.
- `action`: Action when a row is clicked. 

## Adding Styles

To use the project, you need to add the imports for *Bootstrap* and *Angular Material* in your main CSS/SCSS file or in the angular.json file under the styles section:

```TypeScript
  @import '@angular/material/prebuilt-themes/magenta-violet.css';
```

## Available Commands

Development: ng serve to start the development server.
Build: ng build to build the project.
Unit Tests: ng test to execute the unit tests with Karma.
End-to-End Tests: ng e2e to execute the end-to-end tests.

## Contributions

All contributions are welcome! Please open an issue or a pull request to discuss any changes you would like to make.

## License

This project is licensed under the MIT License.
