import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class MainService {
  private coldSource$ = new Observable<string>((subscriber) => {
    subscriber.next('one');
    subscriber.next('two');
    subscriber.next('three');
    subscriber.complete();
  });

  private hotSource$: Subject<string> = new Subject();

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
