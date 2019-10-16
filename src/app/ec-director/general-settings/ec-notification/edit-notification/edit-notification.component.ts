import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss']
})
export class EditNotificationComponent implements OnInit {

  editor = ClassicEditor;
  notificationForm: FormGroup;

  constructor(
    public trans: TranslationService, 
    private fb: FormBuilder, 
    private http: HttpClient,  
    private route: ActivatedRoute, 
    private ecDirectorService: EcDirectorService
    ) { }

  ngOnInit() {
    this.createForm();
    this.getNotification();
  }

  createForm() {
    this.notificationForm = this.fb.group({
      email_content_ru: [''],
      email_content_ua: [''],
      email_content_en: [''],
      sms_content_ru: [''],
      sms_content_ua: [''],
      sms_content_en: [''],
      email_title_en: [''],
      email_title_ru: [''],
      email_title_ua: [''],
    });
  }

  getNotification() {
    this.ecDirectorService.getNotification(this.route.snapshot.params.id).subscribe((resp: any) => {
      console.log(resp);
      this.notificationForm.patchValue(resp);
    })
  }

  onSubmit() {
    this.ecDirectorService.putNotification(this.route.snapshot.params.id, this.notificationForm.value).subscribe( (resp: any) => {
      console.log(resp);
    })
  }

}
