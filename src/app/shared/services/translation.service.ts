import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public language: string = "ru";
  public languages: string[] = ["ru", "ua", "en"];
  constructor() { }


  changeLanguage(e) {
    this.language = e.target.value;
  }
}
