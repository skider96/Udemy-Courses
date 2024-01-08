import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my-component/my-component';

@NgModule({
  declarations: [AppComponent, MyComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent, MyComponent]
})
export class AppModule {}
