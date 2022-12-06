// export interface Cat {
//     id: string
//     img: string
//     breed_name: string
//     breed_origin: string
//     vocalisation: number
//     dog_friendly: number
//     affection_level: number
// }

export class Cat {
    constructor (
        private _id: number,
        private _img: string,
        private _breed_name: string,
        private _breed_origin: string,
        private _vocalisation: number,
        private _dog_friendly: number,
        private _affection_level: number
    ){}

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
    
    public get img(): string {
        return this._img;
    }

    public set img(value: string) {
        this._img = value;
    }

    public get breed_name(): string {
        return this._breed_name;
    }

    public set breed_name(value: string) {
        this._breed_name = value;
    }

    public get breed_origin(): string {
        return this._breed_origin;
    }

    public set breed_origin(value: string) {
        this._breed_origin = value;
    }

    public get vocalisation(): number {
        return this._vocalisation;
    }

    public set vocalisation(value: number) {
        this._vocalisation = value;
    }

    public get dog_friendly(): number {
        return this._dog_friendly;
    }

    public set dog_friendly(value: number) {
        this._dog_friendly = value;
    }

    public get affection_level(): number {
        return this._affection_level;
    }

    public set affection_level(value: number) {
        this._affection_level = value;
    }

}