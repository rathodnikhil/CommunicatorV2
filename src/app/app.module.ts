
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
import { MeetingServiceService } from './services/meeting-service.service';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor} from './services/Authentication';
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
    providers: [AuthGuard, LoginService, UserService, MeetingServiceService,AuthInterceptor],
    bootstrap: [AppComponent], schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
