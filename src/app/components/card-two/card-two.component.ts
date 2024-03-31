import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../../services/main.service';
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

  public hotSource$: Observable<string> = this.mainService.getHotSource$();
  public hotSourceValue: string = 'пока я не получил данных :(';

  ngOnInit(): void {
    console.log('Card 2');
    this.mainService.getColdSource$().subscribe(console.log);

    this.mainService.getHotSource$().subscribe((val: string): void => {
      this.hotSourceValue = val;
      // console.log(val);  //Задача на дебаг
      this.cdr.markForCheck();
    });
  }
}
