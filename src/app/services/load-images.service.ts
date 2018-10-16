import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {
  private FOLDER_IMAGES = 'img';

  constructor(private db: AngularFirestore) { }

  private saveImage(image: { name: string, url: string }) {
    this.db.collection(`/${ this.FOLDER_IMAGES }`).add(image);
  }
}
