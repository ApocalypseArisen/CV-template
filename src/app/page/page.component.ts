import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Title } from "@angular/platform-browser";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Education, JEducation } from './data/education';
import { Hobby, JHobby } from './data/hobby';
import { Language, JLanguage } from './data/language';
import { PersonalInfo } from './data/personal-info';
import { Skill, JSkill } from './data/skill';
import { Work, JWork } from './data/work';

type TranslateJson = {
    languages: JLanguage;
    hobbies: JHobby;
    education: JEducation;
    skills: {
        programming: JSkill;
        frameworks: JSkill;
        technologies: JSkill;
    };
    work: JWork;
};

@Component({
    selector: 'app-page',
    imports: [TranslateModule],
    templateUrl: './page.component.html',
    styleUrl: './page.component.css'
})

export class PageComponent implements OnDestroy
{
    readonly name: string = 'John Smith';
    private translateSub!: Subscription;

    languageList: Language[] = []
    personalInfoList: PersonalInfo[] = []
    hobbyList: Hobby[] = []
    educationList: Education[] = []
    skillLists: { name: string, list: Skill[] }[] = []
    workHistory: Work[] = [];

    ngOnDestroy(): void
    {
        this.translateSub?.unsubscribe();
    }

    constructor(public translate: TranslateService, private title:Title)
    {
        title.setTitle(this.name + " CV");

        this.addPersonalInfo();

        this.translateSub = this.translate.stream('page').subscribe((page: TranslateJson) => {
            this.addLanguages(page.languages);
            this.addHobbies(page.hobbies);
            this.addEducation(page.education);
            this.addSkills(page.skills);
            this.addWorkHistory(page.work);
        });
    }

    addPersonalInfo(): void
    {
        this.personalInfoList.push(new PersonalInfo("example@mail.com", "@"));
        this.personalInfoList.push(new PersonalInfo("+00 000 000 000", "☎"));
        this.personalInfoList.push(
            new PersonalInfo("linkedin.com/in/example-url", undefined, "assets/icons/linkedin.svg"));
        this.personalInfoList.push(
            new PersonalInfo("https://github.com/ExampleUrl", undefined, "assets/icons/github.svg"));
    }

    addLanguages(langs: JLanguage): void
    {
        this.languageList = [];
        for (const lang in langs)
        {
            this.languageList.push(new Language(`assets/flags/${lang}.svg`, langs[lang].name, langs[lang].description));
        }
    }

    addHobbies(hobbies: JHobby): void
    {
        this.hobbyList = [];
        for (const hobby in hobbies)
        {
            if (typeof(hobbies[hobby]) === 'string')
            {
                this.hobbyList.push(new Hobby(hobbies[hobby], null));
                continue;
            }

            this.hobbyList.push(new Hobby(hobbies[hobby].name, hobbies[hobby].description));
        }
    }

    addEducation(education: JEducation): void
    {
        this.educationList = [];
        for (const edu in education)
        {
            this.educationList.push(new Education(
                education[edu].name,
                education[edu].specialization,
                education[edu].university,
                education[edu].duration
            ));
        }
    }

    addSkills(skills: { programming: JSkill, frameworks: JSkill, technologies: JSkill }): void
    {
        let codeSkillList: Skill[] = [];
        let frameworkSkillList: Skill[] = [];
        let technologySkillList: Skill[] = [];

        const skillMap: { list: Skill[], data: JSkill }[] = [
            { list: codeSkillList, data: skills.programming },
            { list: frameworkSkillList, data: skills.frameworks },
            { list: technologySkillList, data: skills.technologies }
        ];

        for (let dataPair of skillMap)
        {
            let list = dataPair.list;
            const data = dataPair.data;
            for (const skill in data)
            {
                list.push(new Skill(data[skill].name, data[skill].level, data[skill].description));
            }
        }

        this.skillLists = [
            { name: this.translate.instant('page.sections.skills.programming'), list: codeSkillList },
            { name: this.translate.instant('page.sections.skills.frameworks'), list: frameworkSkillList },
            { name: this.translate.instant('page.sections.skills.technologies'), list: technologySkillList }
        ];
    }

    addWorkHistory(work: JWork): void
    {
        this.workHistory = [];
        for (const job in work)
        {
            this.workHistory.push(new Work(
                work[job].startDate,
                work[job].endDate,
                work[job].position,
                work[job].company,
                work[job].description
            ));
        }
    }
}
