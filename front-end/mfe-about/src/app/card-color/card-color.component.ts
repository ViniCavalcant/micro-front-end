import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html',
  styleUrls: ['./card-color.component.scss']
})
export class CardColorComponent {
  @Input() colorVariable: string = '';
  @Input() colorName: string = '';
}