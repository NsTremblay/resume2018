import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatListModule,
   MatExpansionModule, MatInputModule, MatFormFieldModule, MatToolbarModule} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    FlexLayoutModule, 
    MatListModule,
    MatExpansionModule, 
    MatInputModule, 
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatToolbarModule]
})
export class MyOwnCustomMaterialModule { }