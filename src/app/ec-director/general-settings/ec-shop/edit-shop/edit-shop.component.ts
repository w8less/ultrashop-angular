import { Component, OnInit } from '@angular/core';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {

  addressForm: FormGroup;
  places: Observable<any>;
  address: any;
  lat: number;
  lng: number;

  constructor(private fb: FormBuilder, private ecDirecorService: EcDirectorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.getAddress();
  }

  createForm() {
    this.addressForm = this.fb.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      house: ['', Validators.required],
      index: ['', Validators.required],
      name: ['', Validators.required],
      shopping_center_name: [''],
      latitude: [null, Validators.required],
      longitude: [null, Validators.required]
    });
  }

  getAddress() {
    this.ecDirecorService.getAddress(this.route.snapshot.params.id).subscribe((resp: any) => {
      console.log(resp);
      this.lat = resp.latitude;
      this.lng = resp.longitude;
      this.addressForm.patchValue(resp);
    })
  }

  submit() {
    this.ecDirecorService.putAddress(this.route.snapshot.params.id, this.addressForm.value).subscribe((resp: any) => {
      console.log(resp);
    })
  }

}
