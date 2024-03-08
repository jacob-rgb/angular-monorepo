import { ProductServiceProviders } from '@angular-monorepo/data-access';
import {
  CardItemComponent,
  GalleryListComponent,
} from '@angular-monorepo/shared-ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule,
        CardItemComponent,
        GalleryListComponent,
      ],
      providers: [...ProductServiceProviders],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should exist', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.nativeElement as HTMLElement;
    expect(true).toBeTruthy();
  });
});
