import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

miau():void {
  let audio = new Audio('../../../assets/audio/cat-meow.mp3')
  audio.play()
}
}
