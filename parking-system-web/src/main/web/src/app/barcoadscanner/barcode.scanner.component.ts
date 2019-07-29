import { Component, OnInit ,ViewChild, AfterViewInit} from '@angular/core';
import { HttpService } from '../common/HttpService.service';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
    selector:'barcode-scanner',
    templateUrl:'./barcode.scanner.component.html',
    styleUrls:['./barcode.scanner.component.css']
})

export class BarcodeScannerComponent implements OnInit,AfterViewInit{

    @ViewChild(BarecodeScannerLivestreamComponent,{static: false})
    barecodeScanner: BarecodeScannerLivestreamComponent;
    message:String="open";
    
    barcodeValue;
    
    ngAfterViewInit() {
        this.barecodeScanner.start();
    }
 
    onValueChanges(result){
        this.barcodeValue = result.codeResult.code;
    }

    constructor(private httpService:HttpService){
        
    }

    ngOnInit(){}

    scan(){
        this.message="Success";
    }

}