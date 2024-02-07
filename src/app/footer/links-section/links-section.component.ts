import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrl: './links-section.component.scss'
})
export class LinksSectionComponent {
  @Input({ required: true }) title!: string;
}
