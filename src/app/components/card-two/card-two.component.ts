import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../../services/main.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTwoComponent implements OnInit {
  private mainService: MainService = inject(MainService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef: DestroyRef = inject(DestroyRef);
  public hotSourceValue: string = 'пока я не получил данных :(';

  ngOnInit(): void {
    console.log('Card 2');
    this.mainService.getColdSource$().subscribe(console.log);

    this.mainService
      .getHotSource$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((val: string): void => {
        this.hotSourceValue = val;
        this.cdr.markForCheck();
      });
  }
}
