import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../../services/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOneComponent implements OnInit {
  private mainService: MainService = inject(MainService);

  public hotSource$: Observable<string> = this.mainService.getHotSource$();

  ngOnInit(): void {
    console.log('Card 1');
    this.mainService.getColdSource$().subscribe(console.log);
  }
}
