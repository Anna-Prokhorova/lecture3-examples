import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../../services/main.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-card-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOneComponent implements OnInit, OnDestroy {
  private mainService: MainService = inject(MainService);

  public hotSource$: Observable<string> = this.mainService.getHotSource$();

  private destroy: Subject<void> = new Subject();
  ngOnInit(): void {
    console.log('Card 1');
    this.mainService
      .getColdSource$()
      .pipe(
        map((val: string): string => val + '!'),
        takeUntil(this.destroy)
      )
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
