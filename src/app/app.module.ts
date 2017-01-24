import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { PathService } from './path.service';


import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { PathDetailsComponent } from './path-details/path-details.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    PathDetailsComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
