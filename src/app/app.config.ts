import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

const httpLoaderFactory: (http: HttpClient)
    => TranslateHttpLoader = (http: HttpClient) => new TranslateHttpLoader(http, 'locale/', '.json')

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withFetch()),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        importProvidersFrom([TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        })])
    ]
};
