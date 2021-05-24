import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  slides = [
    {img: "https://dummyimage.com/350x150/423b42/fff"},
    {img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/1a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/9a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/5a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];
  slideConfig = {"slidesToShow": 4};
   
  slickInit(e) {
    console.log('slick initialized');
  }
     
  breakpoint(e) {
    console.log('breakpoint');
  }
     
  afterChange(e) {
    console.log('afterChange');
  }
     
  beforeChange(e) {
    console.log('beforeChange');
  }
  
}
