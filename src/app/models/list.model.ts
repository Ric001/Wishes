import { Item } from './item.model';

export class Wishes {
    id: number;
    title: string;
    createdAt: Date;
    completedAt: Date;
    finished: boolean;
    items: Array<Item>;

    constructor(title: string) {
        this.id = new Date().getTime();
        this.title = title;
        this.createdAt = new Date();
    }
}
