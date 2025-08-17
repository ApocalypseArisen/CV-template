export class Education
{
    name: string;
    specialization: string;
    university: string;
    duration: string;

    constructor(name: string, specialization: string, university: string, duration: string)
    {
        this.name = name;
        this.specialization = specialization;
        this.university = university;
        this.duration = duration;
    }
}

export type JEducation = Record<string, { name: string; specialization: string; university: string; duration: string }>;
