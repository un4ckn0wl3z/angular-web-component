import { Component, Input  , OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-sub',
  templateUrl: './cart-sub.component.html',
  styleUrls: ['./cart-sub.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CartSubComponent implements OnInit {

  @Input('text') text: string;
  @Input('onAlert') onAlert: boolean;


  constructor() {

   }

  ngOnInit() {

  }


  

}
