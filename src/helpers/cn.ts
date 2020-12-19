import {filterNullable} from './filterNullable';

export function cn(...classes: Nullable<string>[]): string {
    return filterNullable(classes).join(' ');
}
