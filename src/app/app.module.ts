import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChatComponent } from './chat/chat.component';
import { AddChatDialogComponent } from './add-chat-dialog/add-chat-dialog.component';

// Modules
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbChatModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, 
         NbListModule, 
         NbThemeModule, NbThemeService, NbTooltipModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChatComponent,
    AddChatDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    RouterModule,
    AppRoutingModule,
    NbUserModule,
    NbFormFieldModule,
    NbInputModule,
    ReactiveFormsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbCardModule,
    NbWindowModule.forRoot(),
    NbListModule,
    NbAutocompleteModule,
    NbChatModule,
    NbTooltipModule
  ],
  providers: [
    NbThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
