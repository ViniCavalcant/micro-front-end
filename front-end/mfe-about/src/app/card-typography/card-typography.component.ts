import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-typography',
  templateUrl: './card-typography.component.html',
  styleUrls: ['./card-typography.component.scss']
})
export class CardTypographyComponent {
  @Input() fontName: string = '';
  @Input() sizeText: string = '';
  @Input() typeText: 'Regular' | 'Medium' | 'Bold' = 'Regular';
}
