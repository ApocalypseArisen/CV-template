export class Work
{
    startDate: string;
    endDate: string;
    position: string;
    company: string;
    description: string;

    constructor(startDate: string, endDate: string, position: string, company: string, description: string)
    {
        this.startDate = startDate;
        this.endDate = endDate;
        this.position = position;
        this.company = company;
        this.description = description;
    }
}

export type JWork =
    Record<string, {startDate: string, endDate: string, position: string, company: string, description: string}>
