import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgMaterialModule } from './ng-material/ng-material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendSearchComponent } from './home/friend-search/friend-search.component';
import { FriendListComponent } from './home/friend-list/friend-list.component';
import { HeaderListComponent } from './home/header-list/header-list.component';
import { HeaderChatComponent } from './home/header-chat/header-chat.component';
import { ChatComponent } from './home/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendSearchComponent,
    FriendListComponent,
    HeaderListComponent,
    HeaderChatComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
