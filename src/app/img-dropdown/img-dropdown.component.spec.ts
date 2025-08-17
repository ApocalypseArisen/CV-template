import { ComponentFixture, TestBed} from '@angular/core/testing';

import { ImgDropdownComponent } from './img-dropdown.component';

describe('ImgDropdownComponent', () => {
  let component: ImgDropdownComponent;
  let fixture: ComponentFixture<ImgDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
