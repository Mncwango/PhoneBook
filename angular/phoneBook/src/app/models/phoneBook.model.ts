import { EntryModel } from "./entry.model";

export interface phoneBookModel{
    id:number;
    name: string;
    entries: EntryModel[];
}