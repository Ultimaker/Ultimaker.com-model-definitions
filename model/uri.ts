export class Uri {
    scheme: 'https' | 'http';
    host: string;
    path: string;

    public get toString() {
        return `${this.scheme}://${this.host}/${this.path}`;
    }
}
