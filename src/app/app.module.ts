import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NgxScannerQrcodeModule } from "ngx-scanner-qrcode";
import { SafePipe } from "./safe.pipe";
import { OverlayComponent } from "./overlay/overlay.component";

import {
  IconModule,
  IconSetModule,
  IconSetService,
} from "@coreui/icons-angular";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgxScannerQrcodeModule,
    IconModule,
    CommonModule,
    FormsModule,
    IconSetModule.forRoot(),
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    IconModule,
    IconSetModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],

  providers: [IconSetService],
  declarations: [AppComponent, SafePipe, OverlayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule {}
