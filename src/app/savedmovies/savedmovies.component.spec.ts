import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedmoviesComponent } from './savedmovies.component';

describe('SavedmoviesComponent', () => {
  let component: SavedmoviesComponent;
  let fixture: ComponentFixture<SavedmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
