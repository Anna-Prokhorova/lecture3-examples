import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';

@Injectable()
export class MainService {
  private coldSource$ = from(['one', 'two', 'three']);

  private hotSource$: BehaviorSubject<string> = new BehaviorSubject(
    'net dannyx'
  );

  public getColdSource$(): Observable<string> {
    return this.coldSource$;
  }

  public getHotSource$(): Observable<string> {
    return this.hotSource$.asObservable();
  }

  public emitHotSource(): void {
    const date = new Date().toTimeString();
    this.hotSource$.next(date);
  }
}
