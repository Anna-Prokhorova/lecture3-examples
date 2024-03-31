import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../../services/main.service';
import { CardOneComponent } from '../card-one/card-one.component';
import { CardTwoComponent } from '../card-two/card-two.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardOneComponent, CardTwoComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less'],
})
export class CardsComponent {
  private mainService: MainService = inject(MainService);

  public isVisible1: boolean = false;
  public isVisible2: boolean = false;

  public handleClick(): void {
    this.mainService.emitHotSource();
  }
}
