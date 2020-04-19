import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxMatMarkdownTextEditorComponent} from './ngx-mat-markdown-text-editor.component';

describe('NgxMatMarkdownTextEditorComponent', () => {
  let component: NgxMatMarkdownTextEditorComponent;
  let fixture: ComponentFixture<NgxMatMarkdownTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMatMarkdownTextEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatMarkdownTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
