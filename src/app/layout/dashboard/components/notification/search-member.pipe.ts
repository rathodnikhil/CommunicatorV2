import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "searchMember"
})
export class SearchMemberPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            if (it !== null && it !== undefined) {
                const fullName = it.name + ' ' + it.lastName;
                return fullName.toLowerCase().includes(searchText);
            }
        });
    }
}
