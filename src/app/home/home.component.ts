import { Component, OnInit } from '@angular/core';

import { Image } from 'src/app/interface/image';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly images: Image[];
  readonly imagesPath: String;

  constructor() {
    this.images = [
      {path: 'butter.jpg', description: 'Butterfly', title: null},
      {path: 'caterpill.jpg', description: 'Cursed pill.', title: null},
      {path: 'dragon.jpg', description: 'It\'s a dragonfly.', title: null},
      {path: 'katydid.jpg', description: 'How did this get in my apartment.', title: null},
      {path: 'catanger.jpg', description: 'Soon...', title: null},
      {path: 'catconsume.jpg', description: '...', title: null},
      {path: 'catgod.jpg', description: 'I am your god.', title: null},
      {path: 'ripcat.jpg', description: 'Save me.', title: null},
      {path: 'leaf.jpg', description: 'Photogenic leaf.', title: null},
      {path: 'flower.jpg', description: 'Tree flower.', title: null},
      {path: 'doggos.jpg', description: 'Dog hungers.', title: null},
      {path: 'snail.jpg', description: 'Moving shell.', title: null},
      {path: 'pride.jpg', description: 'Happy pride.', title: null},
      {path: 'fountainrainbow.jpg', description: 'Rainbow', title: null},
    ];

    this.imagesPath = environment.production ? '/website/assets/images' : '/assets/images';
  }

  ngOnInit(): void { 
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}
