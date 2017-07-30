import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListSectionComponent } from './shopping-list-section.component';

describe('ShoppingListSectionComponent', () => {
  let component: ShoppingListSectionComponent;
  let fixture: ComponentFixture<ShoppingListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
