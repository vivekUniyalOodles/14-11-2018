import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// material angular 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './material-module';

// bootstrap
import { CollapseModule, BsDropdownModule, CarouselModule } from 'ngx-bootstrap';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ChartsModule } from 'ng2-charts';
import { ZoomImageDirective } from './zoom-image.directive';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent, 
    ZoomImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // material angular
    BrowserAnimationsModule,
    AngularMaterialModule,

    // bootstrap
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),

    //chart
    ChartsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
