import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import {
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule
// } from '@angular/material';

// @NgModule({
//   imports: [
//     MatButtonModule,
//     MatMenuModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatCardModule
//   ],
//   exports: [
//     MatButtonModule,
//     MatMenuModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatCardModule
//   ]
// })
// export class MaterialModule {}
