export class PersonalInfo
{
    identifier?: string;
    image?: string;
    value: string;

    constructor(value: string, identifier?: string, image?: string)
    {
        this.value = value;
        this.identifier = identifier;
        this.image = image;
    }
}
