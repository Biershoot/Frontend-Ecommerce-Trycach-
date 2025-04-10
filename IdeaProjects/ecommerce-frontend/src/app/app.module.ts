import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
