import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import {MarkdownModule} from 'ngx-markdown';

import {NgxMatMarkdownTextEditorComponent} from './ngx-mat-markdown-text-editor.component';

@NgModule({
  declarations: [NgxMatMarkdownTextEditorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MarkdownModule,
    MatMenuModule
  ],
  exports: [NgxMatMarkdownTextEditorComponent]
})
export class NgxMatMarkdownTextEditorModule {
}
