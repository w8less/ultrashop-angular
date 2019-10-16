import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EcDirectorService } from 'src/app/shared/services/ec-director.service';
declare const google: any;

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.scss']
})
export class NewShopComponent implements OnInit {

  @ViewChild('searchPlaces') public searchPlacesElement: ElementRef;
  addressForm: FormGroup;
  places: Observable<any>;
  address: any;
  lat: number = 50.4627668;
  lng: number = 4268693;
  country: string;
  city: string;
  street: string;
  house: number;
  index: number;
  projectId: string;

  constructor(private fb: FormBuilder, private ecDirecorService: EcDirectorService) { }

  ngOnInit() {
    this.createForm();
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

  onKey(event) {
    const searchBox = new google.maps.places.SearchBox(this.searchPlacesElement.nativeElement);
    searchBox.addListener('places_changed', () => {
      
      this.places = searchBox.getPlaces();
      console.log(this.places);
      this.address = this.places[0].address_components;
      this.lat = (this.places[0] && this.places[0].geometry.location.lat() )? this.places[0].geometry.location.lat() : '';
      this.lng = (this.places[0] && this.places[0].geometry.location.lng())? this.places[0].geometry.location.lng() : '';
      
      this.country = this.address.find(x => x.types[0] === 'country').long_name || '';
      
      this.city = this.address.find(x => x.types[0] === 'locality').long_name || '';
      
      this.street = this.address.find(x => x.types[0] === 'route').long_name || '';
      
      this.house = this.address.find(x => x.types[0] === 'street_number').long_name || '';
      
      this.index = this.address.find(x => x.types[0] === 'postal_code').long_name || '';
      this.setValuesToForm();
    });
  }

  setValuesToForm() {
    this.addressForm.patchValue({
      country: this.country,
      city: this.city,
      street: this.street,
      house: this.house,
      index: this.index,
      latitude: this.lat,
      longitude: this.lng
    })
  }

  submit() {
    this.ecDirecorService.postShop(this.addressForm.value).subscribe((resp: any) => {
      console.log(resp);
    })
  }

}
