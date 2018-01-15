import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: 'aaa/bbb/ccc', component: SampleComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
