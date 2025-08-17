export class Language
{
    flag: string;
    name: string;
    description: string;

    constructor(flag: string, name: string, description: string)
    {
        this.flag = flag;
        this.name = name;
        this.description = description;
    }
}

export type JLanguage = Record<string, { name: string; description: string }>;
