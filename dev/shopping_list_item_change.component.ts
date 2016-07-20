import {Component, EventEmitter} from 'angular2/core'
import {ShoppingListService} from "./service/shopping_list.service";
import {ListItem} from "./list-item";


@Component(
    {
        selector: 'shopping-list-item-change',
        template:`
            <div class="form-inline" *ngIf="changedSelectedItem != null">
                 <div class="form-group">
                     <label for="item">Item: </label>
                      <input type="text" id="item" class="form-control" placeholder="item name.." [(ngModel)]="changedSelectedItem.name">
                     </div>
                 <div class="form-group">
                     <label for="amount">Amount: </label>
                      <input type="text" id="amount" class="form-control" [(ngModel)]="changedSelectedItem.amount">
                     </div>
            <button class="btn btn-primary btn-danger btn-sm" (click)="onDeleteItem()">Delete</button>
         </div>

        `,
        inputs:['changedSelectedItem: selectedItem'],
        outputs:['deleted']

    }
)
export class ShoppingListItemChangeComponent{
    private changedSelectedItem: ListItem;
    private deleted = new EventEmitter<ListItem>();

    constructor(private _shoppingListService: ShoppingListService){}

    onDeleteItem(){
        this._shoppingListService.deleteItem(this.changedSelectedItem);
        this.changedSelectedItem=null;
        this.deleted.emit(this.changedSelectedItem);
    }
}