import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
  input,
} from '@angular/core';
import { CardItemComponent } from '../_index';

@Component({
  selector: 'app-gallery-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryListComponent {
  @ContentChild('itemTemplate')
  readonly itemTemplate: TemplateRef<unknown> | null = null;

  readonly items = input.required<Record<string, unknown>[]>();
  readonly colMin = input<string>('400px');
  readonly colMax = input<string>('1fr');

  get minMaxCol() {
    return `repeat(auto-fill, minmax(${this.colMin()}, ${this.colMax()})`;
  }
}
