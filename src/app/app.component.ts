import { Component, ViewEncapsulation } from "@angular/core";
import {
  BaseConfig,
  NgxScannerQrcodeService,
  SelectedFiles,
} from "ngx-scanner-qrcode";
import { cambeep_base64 } from "./beep.audio";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // To require the rear camera https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  public config: BaseConfig = {
    isAuto: false,
    isDraw: true,
    isAlwaysEmit: true,
    text: { font: "25px serif" }, // Hiden { font: '0px', bottom: 40 },
    frame: { lineWidth: 8 },
    medias: {
      audio: false,
      video: {
        facingMode: "environment", // Front and back camera { facingMode: front ? "user" : "environment" }
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    },
  };
  public filesQtyString: string = "Choose File";
  public selectedFiles: SelectedFiles[] = [];

  constructor(private qrcode: NgxScannerQrcodeService) {}

  public onEvent(e: any): void {
    new Audio(cambeep_base64).play();
    console.log(e);
  }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, console.error);
  }

  public onSelects(files: any) {
    this.qrcode
      .loadFiles(files, { ...this.config, isDraw: false })
      .subscribe((res) => {
        this.selectedFiles = res.filter((f) => f.urlQR);
        console.log(res);
        res.length == 0 ? this.filesQtyString = "Choose File" :this.filesQtyString = res.length + " files";
      });
  }
}
