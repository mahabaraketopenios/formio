import { Component } from '@angular/core';
import { FormManagerIndexComponent } from '@formio/angular/manager';
import { FormioGrid } from '@formio/angular/grid';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent extends FormManagerIndexComponent {

}
