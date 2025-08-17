export class Skill
{
    name: string;
    level: string;
    description: string|null;

    constructor(name: string, level: string, description: string|null)
    {
        this.name = name;
        this.level = level;
        this.description = description;
    }
}

export type JSkill = Record<string, { name: string; level: string; description: string }>;
