import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GalleryListComponent } from './gallery-list.component';

describe('GalleryListComponent', () => {
  @Component({
    imports: [GalleryListComponent],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<app-gallery-list [items]="items"></app-gallery-list>`,
  })
  class TestHostComponent {
    items = [];
  }

  it('should create', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items = [];
    expect(fixture.componentInstance).toBeTruthy();
  });
});
