import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from 'src/app/shared/services/translation.service';


@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {
  @Input() config: {title: string , part: string};
  editor = ClassicEditor;
  textForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, public trans: TranslationService) { }

  ngOnInit() {
    this.createForm();
    this.getTexts();
  }

  createForm() {
    this.textForm = this.fb.group({
      content_ru: [''],
      content_ua: [''],
      content_en: [''],
    });
  }

  getTexts() {
    this.http.get(`texts/${this.config.part}/`).subscribe( (resp: any) => {
      console.log(resp);
      this.textForm.patchValue(resp);
    })
  }

  submitText() {
    this.http.put(`texts/${this.config.part}/`, this.textForm.value).subscribe( (val: any) => {
      console.log(val);
    })
  }


}
