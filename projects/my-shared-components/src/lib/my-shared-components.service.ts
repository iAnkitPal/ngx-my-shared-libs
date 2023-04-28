import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySharedComponentsService {

  
  private toastrFlag:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public toastr$ = this.toastrFlag.asObservable();
  private msgTxt:BehaviorSubject<string> = new BehaviorSubject<string>('Some text some message...');
  public msgTxt$ = this.msgTxt.asObservable();
  
  constructor() { }
  
  show():void {
    const SECONDS = 1000;
    let seconds = 3;
    this.toastrFlag.next(true);
    setTimeout(() => {
    this.toastrFlag.next(false);
    },seconds * SECONDS);
  }
  hide():void {
    this.toastrFlag.next(false);
  }
  getToastrFlag():Observable<boolean> {
    return this.toastr$;
  }
  setMsg(str:string) {
    this.msgTxt.next(str);
  }
  getMsg():Observable<string> {
   return this.msgTxt$;
  }
}
