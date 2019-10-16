import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public location: Location) { }

  locationBack() {
    this.location.back();
  }
}
