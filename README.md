

<p align="center">
    <img src="https://github.com/maartentibau/angular-logos/blob/master/logos/angular-extensions.svg" alt="Image" width="150" />
  <img src="https://github.com/maartentibau/angular-logos/blob/master/logos/angular-material.svg" alt="Image" width="150"/>
</p>

# NgxMatMarkdownTextEditor
Angular markdown editor based on Angular material textarea.
The goal of this library is to provide a markdown text editor which sweets the [Angular Material](https://material.angular.io) Design.
* Library location : `projects/ngx-mat-markdown-text-editor` directory of this repository.
* Working example location : `projects/demo` directory of this repository.

## Demo

* Working example location : `projects/demo` directory of this repository.
* [Stackblitz](https://stackblitz.com/@adnanelamghari)

## Installation

`npm i ngx-mat-markdown-text-editor`

## API

`import { NgxMatMarkdownTextEditorModule } from 'ngx-mat-markdown-text-editor'
`<br>
`selector: ngx-mat-markdown-text-editor`

### @Inputs()

| Input                 | Type                   | Required                 | Description                                               |
| --------------------- | ---------------------- | ------------------------ | --------------------------------------------------------- |
| rows                  | number                 | Optional                 |                                                           | 
| appearance            | MatFormFieldAppearance | Optional                 | The form-field appearance style.                          |
| matAutosize           | boolean                | Optional, default: false | Whether autosizing is enabled or not                      |
| readonly              | boolean                | Optional, default: false | Whether the element is readonly.                          |
| placeholder           | string                 | Optional                 | The placeholder for this control.                         |
| matAutosizeMaxRows    | number                 | Optional                 |                                                           |
| livePreviewEnabled    | boolean                | Optional, default: false | Whether the live preview is enabled or not                |
| hideLivePreviewButton | boolean                | Optional, default: false | Whether preview toggle button is displayed or not         |

### @Outputs()

| Output                | Description                                                      |
| ----------------      | ---------------------------------------------------------------- |
| reset                 | Emits when when the user resets a form.                          |
| change                | Emits when the contents of the editor or selection have changed. |
| select                | Emits when the current selection changes.                        |
| focus                 | Emits when the editor receives focus.                            |
| touched               | Emits when the user touches the editor.                          |

## Usage

1) Import the `NgxMatMarkdownTextEditorModule` in your app module.
 > `import { NgxMatMarkdownTextEditorModule } from 'ngx-mat-markdown-text-editor'`

 ```typescript
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxMatMarkdownTextEditorModule} from 'ngx-mat-markdown-text-editor.module';

import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatMarkdownTextEditorModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

 2) Use the editor `(NgxMatMarkdownTextEditor)` in your component.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h3>NgxMatMarkdownTextEditor</h3>
      <form [formGroup]="formGroup" (ngSubmit)="submit()">
        <ngx-mat-markdown-text-editor formControlName="text" appearance="outline" matAutosize [livePreviewEnabled]="true"
                                      rows="5" (change)="change($event)"></ngx-mat-markdown-text-editor>
        <button mat-button type="submit" color="accent">Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({ text: new FormControl('') });
  }

  submit(): void {
    console.log(this.formGroup.value)
  }

}
```

### References
* https://github.com/lon-yang/ngx-markdown-editor
* https://jfcere.github.io/ngx-markdown/
* https://ghiscoding.github.io/angular-markdown-editor/#/reactive-editor
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## Build

Run `ng build ngx-mat-markdown-text-editor` to build the library. The build artifacts will be stored in the `dist/ngx-mat-markdown-text-editor` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test ngx-mat-markdown-text-editor` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Credits

This project is based on [ngx-markdown](https://github.com/jfcere/ngx-markdown) and inspired from [ngx-markdown-editor](https://github.com/lon-yang/ngx-markdown-editor).
