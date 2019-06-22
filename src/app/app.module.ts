
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LoginService } from './services/login.service';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MeetingService } from './services/meeting-service';
import { FormsModule } from '@angular/forms';
import { ApiRequestService } from './services/api-request.service';
import { GroupService } from './services/group.service';
import { ChatService } from './services/chat.service';
// import { NgxDropzoneModule } from 'ngx-dropzone';
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        HttpClientModule,
        // NgxDropzoneModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent], // , SeachMemberPipe
    providers: [AuthGuard, LoginService, UserService, MeetingService, ApiRequestService, GroupService, ChatService],
    bootstrap: [AppComponent], schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
