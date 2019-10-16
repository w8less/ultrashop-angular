import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { makeFormData } from 'src/app/shared/functions/formData';
import { Location } from '@angular/common';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-new-social',
  templateUrl: './new-social.component.html',
  styleUrls: ['./new-social.component.scss']
})
export class NewSocialComponent implements OnInit {

  socialForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private location: Location, public general: GeneralService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.socialForm = this.fb.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      image: [null, Validators.required]
    })
  }

  submit() {
    this.http.post('socials/', makeFormData(this.socialForm.value)).subscribe((resp: any) => {
      console.log(resp);
      this.location.back();
    });
  }
}
