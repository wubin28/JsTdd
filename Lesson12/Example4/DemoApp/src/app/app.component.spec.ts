import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FlexiTitlecasePipe } from './flexi-titlecase.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        FlexiTitlecasePipe
      ],
    }).compileComponents();
  });

  it('renders the correct HTML via the pipe', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const ps = fixture.nativeElement.querySelectorAll('p');
    expect(ps[0].textContent).toMatch('andrew carl olsen');
    expect(ps[1].textContent).toMatch('Andrew Carl Olsen');
    expect(ps[2].textContent).toMatch('aNDREW cARL oLSEN');
  });
});
