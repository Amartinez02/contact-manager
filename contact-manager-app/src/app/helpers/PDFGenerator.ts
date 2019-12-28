import { Injectable } from '@angular/core';

import * as pdfMake  from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class PDFGenerator {

  pdfObject: any;

  constructor(
    public file: File,
    public fileOpener: FileOpener,
    public platform: Platform) {

  }

  generatePDF( data: string[]) {

    let docDefinition = {
      content: data
    };

    this.pdfObject = pdfMake.createPdf(docDefinition);

    if (this.platform.is('cordova')) {
      this.pdfObject.getBuffer((buffer: BlobPart) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'hello.pdf', blob, { replace: true }).then(fileEntry => {

          this.fileOpener.open(this.file.dataDirectory + 'hello.pdf', 'application/pdf');
        });

      });

      return true;
    }

    this.pdfObject.download();

  }

}
