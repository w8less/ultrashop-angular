import {NgModule} from '@angular/core';
import {FileControlAccessorDirective} from './derectives/file-control-accessor.directive';
import {FileMultipleControlAccessorDirective} from './derectives/file-multiple-control-accessor.directive';


@NgModule({
  declarations: [
    FileControlAccessorDirective,
    FileMultipleControlAccessorDirective,
  ],
  exports: [
    FileControlAccessorDirective,
    FileMultipleControlAccessorDirective,
  ],
})
export class FileAccessorModule {
}
