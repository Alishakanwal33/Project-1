import { Component } from '@angular/core'; // Add this import for NgModule
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ZXingScannerModule // Import ZXingScannerModule here
  ]
  
})
export class BarcodeComponent {
  scannedCode: string | null = null;

  formats: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  constructor() {}

  onCodeResult(resultString: string): void {
    this.scannedCode = resultString;
  }


}