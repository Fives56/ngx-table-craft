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
  data = [
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
    { name: 'John', age: 25, city: 'New York', sex: 'M' },
    { name: 'Anna', age: 28, city: 'London', sex: 'F'  },
    { name: 'Mike', age: 32, city: 'Chicago', sex: 'M'  },
  ];

  configs: IConfigs = {
    title: 'Title Example',
    colsName: ['Nombre', 'Apellidos', 'Correo', 'Edad'],
    properties: ['name', 'lastName', 'email', 'age'],
  };
}
