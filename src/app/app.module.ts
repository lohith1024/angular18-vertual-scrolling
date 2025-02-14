import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { App } from '../main';

@NgModule({
  declarations: [
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [VirtualScrollComponent]
})
export class AppModule { }
