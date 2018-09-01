import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'genericSearchAllProp'
})
export class GenericSearchAllPropPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(item =>
            Object.keys(item).some(k => (item[k] != null &&
                item[k].toString().toLowerCase()
                    .includes(searchText.toLowerCase()))
                || (item[k] != null && typeof item[k] == 'object'
                    && Object.keys(item[k]).some(x => item[k][x] != null
                        && item[k][x].toString().toLowerCase().includes(searchText.toLowerCase()))))
        );
    }
}
