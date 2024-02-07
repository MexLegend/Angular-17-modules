import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-selling-card',
  templateUrl: './best-selling-card.component.html',
  styleUrl: './best-selling-card.component.scss'
})
export class BestSellingCardComponent {

  @Input({ required: true }) img!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) price!: number;

}
