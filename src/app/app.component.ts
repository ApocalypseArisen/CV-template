import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageComponent } from './page/page.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TranslateModule, NavBarComponent, PageComponent, NgClass],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent
{
    title: string = 'cv';
    theme: string = 'darkTheme'

    private supportedLanguages: Array<string> = ['en', 'pl'];
    private defaultLanguage: string = 'en'

    constructor(private translate: TranslateService)
    {
        this.translate.addLangs(this.supportedLanguages)
        this.translate.setDefaultLang(this.defaultLanguage);

        const browserLang = translate.getBrowserLang()
        if (browserLang && this.supportedLanguages.includes(browserLang))
        {
            this.translate.use(browserLang);
        }
        else
        {
            this.translate.use(this.defaultLanguage)
        }
    }

    printPdf() : void
    {
        if (typeof window !== 'undefined')
        {
            window.print()
        }
    }
}
