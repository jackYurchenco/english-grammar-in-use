import { NgModule } from '@angular/core';
import { LessonsRoutingModule } from './lessons-routing.module';
import {
  LessonsComponent,
  LevelComponent,
  NavigationComponent,
  UnitsComponent
} from './components';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
    LessonsComponent,
    NavigationComponent,
    LevelComponent,
    UnitsComponent
  ],
  imports: [
    LessonsRoutingModule,
    NzLayoutModule,
    NzDropDownModule,
    NzListModule
  ],
  providers: [
   
  ],
  bootstrap: [

  ]
})
export class LessonsModule { }
