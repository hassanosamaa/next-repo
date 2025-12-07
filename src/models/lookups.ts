export interface ILookupsModel {
    id: string;
    name: string;
}

export class LookupsModel implements ILookupsModel {
    id = '';
    name = '';
}

export const isLookupsModel = (obj: unknown): obj is ILookupsModel => {
    return obj instanceof Object && 'id' in obj && 'name' in obj;
};
