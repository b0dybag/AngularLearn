import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TestComponent } from './test/test.component';

const  appRouters: Route[] = [
  {path: 'test3', component: TestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    DropdownDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
