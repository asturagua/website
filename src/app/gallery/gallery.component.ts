import { Component, OnInit } from '@angular/core';

import { Image } from 'src/app/interface/image';
@Component({
  selector: 'cw-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  foods: Image[];

  constructor() { }

  ngOnInit(): void {
    this.foods = 
    [
      {path:'food/bbt.jpg', description:'bubble tea yum', title:'bubble tea'},
      {path:'food/coconut.jpg', description:'sweet coconut drink yum', title:'coconut'},
      {path:'food/meatrice.jpg', description:'many meat yum', title:'meat n rice'},
      {path:'food/milkbread.jpg', description:'milk tea butter bread omelette yum', title:'a breakfast'},
      {path:'food/takoyaki.jpg', description:'takoyaki yum', title:'takoyaki'},
    ]
  }

}
