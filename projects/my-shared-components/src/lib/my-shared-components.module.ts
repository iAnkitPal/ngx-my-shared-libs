import { NgModule } from '@angular/core';
import { MySharedComponentsComponent } from './my-shared-components.component';
import { TestViewComponent } from './test-view/test-view.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MySharedComponentsComponent,
    TestViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MySharedComponentsComponent,
    TestViewComponent
  ]
})
export class MySharedComponentsModule { }
