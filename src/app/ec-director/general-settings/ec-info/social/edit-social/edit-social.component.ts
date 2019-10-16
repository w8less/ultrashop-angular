import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { ActivatedRoute } from '@angular/router';
import { makeFormData } from 'src/app/shared/functions/formData';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.scss']
})
export class EditSocialComponent implements OnInit {

  socialForm: FormGroup;
  social: any;

  constructor(private fb: FormBuilder, private ecDirectorService: EcDirectorService, private route: ActivatedRoute, public general: GeneralService) { }

  ngOnInit() {
    this.getSocial();
    this.createForm();
  }

  createForm() {
    this.socialForm = this.fb.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      image: [null, Validators.required]
    })
  }

  getSocial() {
    this.ecDirectorService.getSocial(this.route.snapshot.params.id).subscribe( (resp: any) => {
      this.social = Object.assign({}, resp);
      delete resp.image;
      this.socialForm.patchValue(resp);
    })
  }

  submit() {
    const obj = this.socialForm.value;
    if (obj.image === null) {
      delete obj.image;
    }
    console.log(obj);
    this.ecDirectorService.putSocial(this.route.snapshot.params.id, makeFormData(obj)).subscribe((resp: any) => {this.general.locationBack()});
  }

}
