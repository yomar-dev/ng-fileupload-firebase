import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];
  @Output() mouseOn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.preventStop(event);
    this.mouseOn.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOn.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const transfer = this.getTransfer(event);

    if (!transfer) { return; }

    this.extractFiles(transfer.files);
    this.preventStop(event);
    this.mouseOn.emit(false);
  }

  private getTransfer(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private extractFiles( fileList: FileList) {
    // tslint:disable-next-line:forin
    for (const property in Object.getOwnPropertyNames(fileList)) {
      const fileTemp = fileList[property];
      if (this.fileCanLoaded(fileTemp)) {
        const newFile = new FileItem(fileTemp);
        this.files.push(newFile);
      }
    }
  }

  /**
   *  Validations
   */

  private preventStop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private isDroppedFile(fileName: string): boolean {
    for (const file of this.files) {
      if (file.fileName === fileName) {
        console.log('File ' + fileName + ' exist.');
        return true;
      }
    }
    return false;
  }

  private isImage(fileType: string): boolean {
    return (fileType === '' || fileType === undefined) ? false : fileType.startsWith('image');
  }

  private fileCanLoaded(file: File): boolean {
    if (!this.isDroppedFile(file.name) && this.isImage(file.type)) {
      return true;
    } else {
      return false;
    }
  }

}
