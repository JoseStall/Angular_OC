export class Post {
    id: number;
    loveIts: number;
    created_at: number;
    constructor(public title: string, public content: string) {
    }
}