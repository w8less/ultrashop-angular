import {Directive, HostListener} from '@angular/core';
import {DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: 'input[type=file][formControlName]:not([multiple]), input[type=file][formControl]:not([multiple]), input[type=file][ngModel]:not([multiple])',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileControlAccessorDirective,
      multi: true,
    },
  ],
})
export class FileControlAccessorDirective extends DefaultValueAccessor {
  @HostListener('change', ['$event.target.files[0]']) onChangeFile(file) {
    this.onChange(file);
  }

  writeValue(obj: any) {
  }
}
