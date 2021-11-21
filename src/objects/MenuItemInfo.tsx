export default class MenuItemInfo {
    private _link: string;

    public get link() {
        return this._link;
    }

    private _name: string;

    public get name() {
        return this._name;
    }

    public constructor(link: string, name: string) {
        this._link = link;
        this._name = name;
    }
}