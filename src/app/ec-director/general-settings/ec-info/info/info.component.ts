import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infoForm: FormGroup;
  description_ru: any;
  description_en: any;
  description_ua: any;
  public Editor = ClassicEditor;
  public model_ru = {
    editorData: null,
    editorDataRU: null
  };
  public model_en = {
    editorData: null,
    editorDataRU: null
  };
  public model_ua = {
    editorData: null,
    editorDataRU: null
  };
  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }
  public onChangeRu({editor}: ChangeEvent) {
    const data = editor.getData();
    this.description_ru = data;
  }
  public onChangeEn({editor}: ChangeEvent) {
    const data = editor.getData();
    this.description_en = data;
  }
  public onChangeUa({editor}: ChangeEvent) {
    const data = editor.getData();
    this.description_ua = data;
  }
  constructor(private fb: FormBuilder, private ecDirectorService: EcDirectorService, public trans: TranslationService) { }

  ngOnInit() {
    this.createForm();
    this.getInfo();
  }

  getInfo() {
    this.ecDirectorService.getInfo().subscribe((resp: any) => {
      console.log(resp);
      
      this.infoForm.patchValue({
        title_en: resp.title_en,
        title_ru: resp.title_ru,
        title_ua: resp.title_ua,
        tel: resp.tel,
      })
      this.description_en = resp.description_en;
      this.description_ru = resp.description_ru;
      this.description_ua = resp.description_ua;
      this.model_ru.editorData = this.description_ru;
      this.model_en.editorData = this.description_en;
      this.model_ua.editorData = this.description_ua;
    })
  }

  createForm() {
    this.infoForm = this.fb.group({
      title_ru: ['', Validators.required],
      title_en: ['', Validators.required],
      title_ua: ['', Validators.required],
      tel: ['', Validators.required],
    });
  }

  submitInfo() {
    const info = this.infoForm.value;
    info.description_en = this.description_en;
    info.description_ru = this.description_ru;
    info.description_ua = this.description_ua;
    console.log(info);
    
    this.ecDirectorService.putInfo(info).subscribe( (resp: any) => {
      console.log(resp);
    })
  }

}
