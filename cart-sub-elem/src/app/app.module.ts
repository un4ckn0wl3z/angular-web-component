import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CartSubComponent } from './cart-sub/cart-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    CartSubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    CartSubComponent
  ]
})
export class AppModule { 

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CartSubComponent, {injector: this.injector});
    customElements.define('cart-sub', el);
  }
  
}
