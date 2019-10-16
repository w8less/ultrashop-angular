import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { makeFormData } from 'src/app/shared/functions/formData';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  addUserForm: FormGroup;
  groups_loading = false;
  groups: any;

  constructor(private ecDirectorService: EcDirectorService, private fb: FormBuilder, public general: GeneralService) { }

  ngOnInit() {
    this.createForm();
    this.getGroups();
  }

  createForm() {
    this.addUserForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      new_password: [null, Validators.required],
      new_password_confirm: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      tel: [null, Validators.required],
      groups_ids: [[], Validators.required],
      image: [null, Validators.required],
      is_active: [false, Validators.required],
      is_staff: [false, Validators.required],
    }) 
  }

  getGroups() {
    this.ecDirectorService.getGroups().subscribe((groups: any) => {
      this.groups = groups;
    })
  }

  submit() {
    this.ecDirectorService.newUser(makeFormData(this.addUserForm.value)).subscribe((resp: any) => {
      console.log(resp);
      this.general.locationBack();
    });
  }

  onMatSelectInfititeScroll() {
    if (!this.groups_loading) {
      this.groups_loading = !this.groups_loading;
      this.ecDirectorService.getGroups(`?offset=${this.groups.results.length}`).subscribe((resp: any) => {
        this.groups.results.push(...resp.results);
        this.groups_loading = !this.groups_loading;
      });
    }
  }
}
