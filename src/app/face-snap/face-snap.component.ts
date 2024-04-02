import {NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';

@Component({
  standalone: true,
  selector: 'app-face-snap',
  imports: [NgIf],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  buttonTitle = 'Snap';

  onAddSnap() {
    if (this.buttonTitle === 'Snap') {
      this.faceSnap.snaps++;
      this.buttonTitle = 'Unsnap';
    } else {
      this.faceSnap.snaps--;
      this.buttonTitle = 'Snap';
    }
  }
}
