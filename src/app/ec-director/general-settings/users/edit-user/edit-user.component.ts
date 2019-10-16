import { Component, OnInit } from '@angular/core';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { makeFormData } from 'src/app/shared/functions/formData';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  addUserForm: FormGroup;
  groups_loading = false;
  groups: any;
  user: any;

  constructor(private ecDirectorService: EcDirectorService, private fb: FormBuilder, private route: ActivatedRoute, private general: GeneralService) { }

  ngOnInit() {
    this.getUser();
    this.getGroups();
  }

  getUser() {
    this.ecDirectorService.getUser(this.route.snapshot.params.userId).subscribe((user: any) => {
      console.log(user);
      
      this.user = Object.assign({}, user);
      this.createForm();
      user.groups_ids = (() => {
        let result = [];
        user.groups.forEach(element => {
          result.push(element.id);
        });
        return result;
      })();
      delete user.image;
      this.addUserForm.patchValue(user);
    })
  }

  createForm() {
    this.addUserForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      new_password_confirm: ['', Validators.required],
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

  onMatSelectInfititeScroll() {
    if (!this.groups_loading) {
      this.groups_loading = !this.groups_loading;
      this.ecDirectorService.getGroups(`?offset=${this.groups.results.length}`).subscribe((resp: any) => {
        this.groups.results.push(...resp.results);
        this.groups_loading = !this.groups_loading;
      });
    }
  }

  submit() {
    const obj = this.addUserForm.value;
    if (obj.image === null) {
      delete obj.image;
    }
    this.ecDirectorService.putUser(this.route.snapshot.params.userId, makeFormData(obj)).subscribe((resp: any) => {
      console.log(resp);
      this.general.locationBack();
    })
  }

}
