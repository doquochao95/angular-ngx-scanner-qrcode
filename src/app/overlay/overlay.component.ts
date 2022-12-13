import { Component, Input, OnInit } from '@angular/core';
import { SelectedFiles } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() data: SelectedFiles;

  constructor() { }

  ngOnInit() {
  }

}