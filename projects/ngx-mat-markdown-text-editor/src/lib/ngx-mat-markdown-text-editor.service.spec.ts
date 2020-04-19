import {TestBed} from '@angular/core/testing';

import {NgxMatMarkdownTextEditorService} from './ngx-mat-markdown-text-editor.service';

describe('NgxMatMarkdownTextEditorService', () => {
  let service: NgxMatMarkdownTextEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatMarkdownTextEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
