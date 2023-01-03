import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Uncomment the following code:
// -----------------------------
//
// import { Component } from '@angular/core';
//
// @Component({selector: 'app-toggleswitch', template: ''})
// class ToggleswitchStubComponent {}
//
// @Component({selector: 'app-banner', template: ''})
// class BannerStubComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, 

        // Uncomment the following code:
        // -----------------------------
        // ToggleswitchStubComponent,
        // BannerStubComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DemoApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DemoApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('DemoApp app is running!');
  });
});
