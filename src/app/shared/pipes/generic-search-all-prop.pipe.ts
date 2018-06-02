import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'genericSearchAllProp'
})
export class GenericSearchAllPropPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            debugger;
            Object.values(it).forEach(element => {
                if (element !== undefined && element != null) {
                    if (typeof element === 'string') {
                        return element.toLowerCase().includes(searchText);
                    }
                    if ((typeof element).toLocaleLowerCase() === 'object') {
                        Object.values(element).forEach(innerElem => {
                            if (innerElem != null && typeof innerElem === 'string') {
                                return innerElem.toLowerCase().includes(searchText);
                            }
                        });
                    }
                }
            });
        });
    }

}
