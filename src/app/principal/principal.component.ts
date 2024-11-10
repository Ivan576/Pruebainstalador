import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  img1:string = "assets/img/img1.png";
  img2:string = "assets/img/img2.png";
  img3:string = "assets/img/img3.jpg";
  img4:string = "assets/img/img1.png";
  img5:string = "assets/img/img2.png";
  img6:string = "assets/img/img3.jpg";

  currentImage: string | null = "image1";

  showImage(imageId: string): void {
    this.currentImage = imageId;
  }

}
