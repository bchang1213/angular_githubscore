import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GithubformComponent } from './githubform/githubform.component';
import { GitscoreService } from './gitscore.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    GithubformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitscoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
