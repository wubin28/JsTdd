import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have <h1> with "croeso pawb!"', () => {
    const bannerElement = fixture.nativeElement as HTMLElement;
    const h1 = bannerElement.querySelector('h1');
    expect(h1?.textContent).toEqual('croeso pawb!');
  });

  it('should handle 1 click event and display title in uppercase', () => {
    const bannerElement = fixture.nativeElement as HTMLElement;
    const h1 = bannerElement.querySelector('h1');
    h1?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(h1?.textContent).toEqual('CROESO PAWB!');
  });

  it('should handle 2 click events and display title in lowercase', () => {
    const bannerElement = fixture.nativeElement as HTMLElement;
    const h1 = bannerElement.querySelector('h1');
    h1?.dispatchEvent(new Event('click'));
    h1?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(h1?.textContent).toEqual('croeso pawb!');
  });

});
