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
  readonly yearsOfWork: number;

  constructor() {
    this.images = [
      {path: 'drifloon.jpg', description: 'Paper mache drifloons I made for halloween.', title: null},
      {path: 'litwik.jpg', description: 'Litwik I modelled in blender and 3D printed', title: null},
      {path: 'mimikyu.jpg', description: 'Mimikyu made of foam with magnetic interchangeable clothes.', title: null},
      {path: 'butter.jpg', description: 'Butterfly', title: null},
      {path: 'caterpill.jpg', description: 'Cursed pill.', title: null},
      {path: 'dragon.jpg', description: 'It\'s a dragonfly.', title: null},
      {path: 'katydid.jpg', description: 'How did this get in my apartment.', title: null},
      {path: 'leaf.jpg', description: 'Photogenic leaf.', title: null},
      {path: 'flower.jpg', description: 'Tree flower.', title: null},
      {path: 'doggos.jpg', description: 'Dog hungers.', title: null},
      {path: 'snail.jpg', description: 'Moving shell.', title: null},
      {path: 'pride.jpg', description: 'Happy pride.', title: null},
      {path: 'fountainrainbow.jpg', description: 'Rainbow', title: null},
    ];

    this.imagesPath = environment.production ? '/website/assets/images' : '/assets/images';
    this.yearsOfWork = new Date().getFullYear() - 2019;
  }

  ngOnInit(): void { 
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}
