export class Hobby
{
    name: string;
    description: string|null;

    constructor(name: string, description: string|null)
    {
        this.name = name;
        this.description = description;
    }
}

export type JHobby = Record<string, { name: string; description: string|null }>;
