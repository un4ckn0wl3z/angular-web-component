import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyWidgetComponent } from './my-widget/my-widget.component';

@NgModule({
  declarations: [MyWidgetComponent],
  imports: [BrowserModule],
  entryComponents: [MyWidgetComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(MyWidgetComponent, {
      injector: injector,
     });
     customElements.define('my-widget', customButton);
  }

  ngDoBootstrap() {}
}
