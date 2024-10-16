import { Component, ElementRef, ViewChild  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioModule,FormioOptions  } from '@formio/angular';
import { FormioGrid } from '@formio/angular/grid';
import { FormManagerModule, FormManagerService, FormManagerConfig } from '@formio/angular/manager';
import { IndexComponent } from './index/index.component';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormioModule,FormioGrid,FormManagerModule,IndexComponent
],
providers: [
  FormManagerService,
  {provide: FormManagerConfig, useValue: {
    tag: 'common',
    includeSearch: true
  }}
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
json:any
  title = 'survey';
  public options = {
    builder: {
      custom: {
        weight: -10,
        title: 'Custom',
        default: true
      },
      basic: {
        default: false
      }
    }
  } as FormioOptions; // Use this cautiously
   formJson = {

    components: [
      {
        type: 'textfield',
        key: 'firstName',
        label: 'First Name',
        placeholder: 'Enter your first name',
        input: true
      },
      {
        type: 'textfield',
        key: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        input: true
      },
      {
        type: 'email',
        key: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        input: true
      }
    ]
  };

  onChangeDesign(ev:any){
    console.log("evvv",ev);
console.log(ev.form);
if (['addComponent', 'saveComponent', 'deleteComponent'].indexOf(ev.type) > -1) {
  this.formJson = cloneDeep(ev.form);
  this.json=JSON.stringify(this.formJson);

}

  }

ngOnInit(){
  this.json=JSON.stringify(this.formJson);
}

}

