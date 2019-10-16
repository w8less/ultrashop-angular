import {Directive, HostListener} from '@angular/core';
import {DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: 'input[type=file][formControlName][multiple], input[type=file][formControl][multiple], input[type=file][ngModel][multiple]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileMultipleControlAccessorDirective,
      multi: true,
    },
  ],
})
export class FileMultipleControlAccessorDirective extends DefaultValueAccessor {
  @HostListener('change', ['$event.target.files']) onChangeFile(files) {
    this.onChange(files);
  }

  writeValue(obj: any) {
  }
}
