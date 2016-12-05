import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { ConvertComponent } from './convert/convert.component';
import { PartAComponent } from './part-a/part-a.component';
import { PartBComponent } from './part-b/part-b.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,
    ConvertComponent,
    PartAComponent,
    PartBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
