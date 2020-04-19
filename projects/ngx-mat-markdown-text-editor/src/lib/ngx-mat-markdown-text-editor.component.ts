import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnDestroy, Output} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'lib-ngx-mat-markdown-text-editor',
  templateUrl: './ngx-mat-markdown-text-editor.component.html',
  styleUrls: ['./ngx-mat-markdown-text-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatMarkdownTextEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgxMatMarkdownTextEditorComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMatMarkdownTextEditorComponent implements ControlValueAccessor, OnDestroy {


  @Input() rows: number;
  @Input() appearance: MatFormFieldAppearance;
  @Input() errorStateMatcher: ErrorStateMatcher;
  @Input() matAutosize: boolean;
  @Input() readonly: boolean;
  @Input() placeholder: string;
  @Input() matAutosizeMaxRows: number;
  @Input() livePreviewEnabled: boolean;
  @Input() hideLivePreviewButton: boolean = false;

  @Output() reset = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() touched = new EventEmitter();

  public isPreviewMode: boolean = true;
  public form: FormGroup;

  private selection: any;
  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      textarea: new FormControl(),
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value.textarea);
        this._change(value.textarea);
        this.onTouched();
      })
    );
  }

  get value(): string {
    return this.form.value.textarea;
  }

  set value(value: string) {
    this.form.setValue({textarea: value});
    this.onChange(value);
    this._change(value);
    this.onTouched();
  }

  onChange: any = () => {
  }

  onTouched: any = () => {
  }

  validate(_: FormControl) {
    return;
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
    if (obj === null) {
      this.form.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.change.emit(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.touched.emit(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.controls['textarea'].disable();
    } else {
      this.form.controls['textarea'].enable();
    }
  }

  addContent(type: string): void {
    let text;
    if (this.selection && this.selection.value) {
      text = this.selection.value.substring(this.selection.selectionStart, this.selection.selectionEnd);
    }
    let initText = '';
    switch (type) {
      case 'Bold':
        initText = 'Bold Text';
        text = `**${text || initText}**`;
        break;
      case 'Italic':
        initText = 'Italic Text';
        text = `*${text || initText}*`;
        break;
      case 'H1':
        initText = 'Heading 1 ';
        text = `\n# ${text || initText}`;
        break;
      case 'H2':
        initText = 'Heading 2';
        text = `\n## ${text || initText}`;
        break;
      case 'H3':
        initText = 'Heading 3';
        text = `\n### ${text || initText}`;
        break;
      case 'H4':
        initText = 'Heading 4';
        text = `\n#### ${text || initText}`;
        break;
      case 'H5':
        initText = 'Heading 5';
        text = `\n##### ${text || initText}`;
        break;
      case 'H6':
        initText = 'Heading 6';
        text = `\n###### ${text || initText}`;
        break;
      case 'Quote':
        initText = 'Quote';
        text = `> ${text || initText}`;
        break;
      case 'Link':
        initText = 'Link name';
        text = `[${text || initText}](http://exemple.com)`;
        break;
      case 'Image':
        initText = 'Image name';
        text = `![${text || initText}](http://exemple.com/image.jpg)`;
        break;
      case 'Ul':
        initText = 'Unordered sub-list';
        text = `\n- ${text || initText}`;
        break;
      case 'Ol':
        initText = 'Ordered sub-list';
        text = `\n1. ${text || initText}`;
        break;
      case 'Code':
        initText = 'Source Code';
        text = '```language\r\n' + (text || initText) + '\r\n```';
        break;
      case 'Line':
        text = '\n***\n';
        break;
      default:
        text = '';
        break;
    }
    if (this.selection && this.selection.value) {
      this.value = this.selection.value.substring(0, this.selection.selectionStart) + text +
        this.selection.value.substring(this.selection.selectionEnd, this.selection.value.length - 1);
    } else if (this.value !== '') {
      this.value += text;
    } else {
      this.value = text;
    }
    this.selection = null;
  }

  _select(event, isFocus: boolean = false) {
    this.selection = event.target;
    if (isFocus) {
      this.focus.emit(event);
    } else {
      this.select.emit(event);
    }
  }

  _reset(event): void {
    this.reset.emit(event);
  }

  _change(event): void {
    this.change.emit(event);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
