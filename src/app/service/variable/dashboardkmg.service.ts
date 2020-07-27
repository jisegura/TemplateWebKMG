import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardkmgService {

  // false === cerrado
  public dashboardState: BehaviorSubject<boolean>;
  // true === esta abierto
  private lock: boolean;

  constructor() {
    this.dashboardState = new BehaviorSubject(false);
    this.lock = false;
  }

  public getState(): Observable<boolean>{
    return this.dashboardState.asObservable();
  }

  public toggleState(): void{
    this.dashboardState.next(!this.dashboardState.getValue());
  }

  public openState(): void{
    this.dashboardState.next(true);
  }

  public closeState(): void{
    this.dashboardState.next(false);
  }

  public toggleLock(): void{
    this.lock = !this.lock;
  }


  public isLock(): boolean{
    return this.lock;
  }

}
