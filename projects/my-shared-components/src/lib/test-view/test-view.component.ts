import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MySharedComponentsService } from '../my-shared-components.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent implements OnChanges {
   @Input('msg') msgTxt:string = 'Some text some message...';
   @Input('flag') toastrFlag:boolean = false;

  constructor(private toastr:MySharedComponentsService) {}
  ngOnChanges(_changes: SimpleChanges): void {
    this.toastr.setMsg(this.msgTxt);
    if(this.toastrFlag) {
    this.toastr.show();
    }
  }

  getToastr():boolean {
    let flag:boolean = false;
    this.toastr.getToastrFlag().subscribe((res:boolean) => {
      flag = res;
    });
    return flag;
  }
  getTxtMsg():Observable<string> {
    return this.toastr.getMsg();
  }
}
