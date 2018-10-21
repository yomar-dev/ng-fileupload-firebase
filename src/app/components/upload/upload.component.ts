import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { LoadImagesService } from '../../services/load-images.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: []
})
export class UploadComponent implements OnInit {

  isOnElement = false;
  files: FileItem[] = [];

  constructor(public _loadImages: LoadImagesService) { }

  ngOnInit() {
  }

  uploadImages() {
    this._loadImages.loadImagesToFirebase(this.files);
  }

  clearFileList() {
    this.files = [];
  }

}
