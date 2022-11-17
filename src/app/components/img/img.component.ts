import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  imageDefault = 'https://www.w3schools.com/howto/img_avatar.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }
  
  imgLoaded(){
    console.log('loaded');
  }

}
