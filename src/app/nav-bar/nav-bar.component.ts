import { NgClass } from '@angular/common';
import { Component, output, model, OnInit } from '@angular/core';

import { ImgDropdownComponent } from './../img-dropdown/img-dropdown.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [ImgDropdownComponent, NgClass, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit
{
    theme = model.required<string>();

    printPdf = output<void>();

    themeDropdownIcon: string = "assets/icons/computer_select.svg"
    themeMap = new Map<number, string>([
        [1, "darkTheme"],
        [2, "lightTheme"]
    ])
    themes: {id:number, icon:string, label:string}[] = [
            {"id": 0, "icon": "assets/icons/computer.svg", "label": ""},
            {"id": 1, "icon": "assets/icons/darkmode.svg", "label": ""},
            {"id": 2, "icon": "assets/icons/lightmode.svg", "label": ""}
        ];
    themesSubGuard: Subscription

    constructor(private translate : TranslateService)
    {
        this.themesSubGuard = translate.stream('navbar.themes').subscribe((themes: any) => {
            this.themes[0].label = themes.system;
            this.themes[1].label = themes.dark;
            this.themes[2].label = themes.light;
        });
    }

    ngOnInit(): void
    {
        if (typeof window !== 'undefined')
        {
            this.theme.update(_ => window.matchMedia('(prefers-color-scheme: dark)').matches
                ? "darkTheme"
                : "lightTheme")
        }
    }

    onSelected(id: number) : void
    {
        switch (id)
        {
            case 0:
            {
                this.themeDropdownIcon = "assets/icons/computer_select.svg"
                if (typeof window !== 'undefined')
                {
                    this.theme.update(_ => window.matchMedia('(prefers-color-scheme: dark)').matches
                        ? "darkTheme"
                        : "lightTheme")
                }
            } break;
            case 1:
            {
                this.themeDropdownIcon = "assets/icons/darkmode_select.svg"
                this.theme.update(_ => "darkTheme")
            } break;
            case 2:
            {
                this.themeDropdownIcon = "assets/icons/lightmode_select.svg"
                this.theme.update(_ => "lightTheme")
            }
        }
    }

    changeLanguage(langueage: string) : void
    {
        this.translate.use(langueage)
    }
}
