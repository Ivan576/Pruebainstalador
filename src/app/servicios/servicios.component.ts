import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  currentImage: string | null = "image1";

  showImage(imageId: string): void {
    this.currentImage = imageId;
  }
}
