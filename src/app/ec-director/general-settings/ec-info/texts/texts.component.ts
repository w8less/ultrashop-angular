import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {
  configs: {title: string , part: string}[] = [
    {
      title: "Конфиденциальность",
      part: "confidentiality"
    },
    {
      title: "Оффер",
      part: "offer"
    },
    {
      title: "Условия использования",
      part: "terms-of-use"
    },
    {
      title: "Условия возврата",
      part: "return-terms"
    },
    {
      title: "Условия доставки и возврата",
      part: "delivery-and-return-terms"
    },
  ] 
  
  constructor(public trans: TranslationService) { }

  ngOnInit() {
  }
}
