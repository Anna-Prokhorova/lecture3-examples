import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-draft',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.less'],
})
export class DraftComponent implements OnInit {
  ngOnInit(): void {}
}
