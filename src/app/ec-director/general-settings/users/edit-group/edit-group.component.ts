import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  groupForm: FormGroup;

  constructor(private route: ActivatedRoute, private ecDirectorService: EcDirectorService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getGroup();
  }

  getGroup() {
    this.ecDirectorService.getGroup(this.route.snapshot.params.groupId).subscribe((group: any) => {
      console.log(group);
      this.createForm();
      this.groupForm.patchValue(group);
    })
  }

  createForm() {
    this.groupForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

}
