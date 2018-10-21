import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {
  private FOLDER_IMAGES = 'img';

  constructor(private db: AngularFirestore) { }

  private saveImage(image: { name: string, url: string }) {
    this.db.collection(`/${ this.FOLDER_IMAGES }`).add(image);
  }

  loadImagesToFirebase(images: FileItem[]) {
    console.log(images);
  }
}
