import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubformComponent } from './githubform.component';

describe('GithubformComponent', () => {
  let component: GithubformComponent;
  let fixture: ComponentFixture<GithubformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
