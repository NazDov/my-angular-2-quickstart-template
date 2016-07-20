import {Component} from 'angular2/core'
import {ShoppingListItemComponent} from "./shopping_list_item.component";
import {ShoppingListItemChangeComponent} from "./shopping_list_item_change.component";
import {ShoppingListService} from "./service/shopping_list.service";
import {OnInit} from "angular2/core";
import {ListItem} from "./list-item";


@Component(
    {
        selector: 'shopping-list-main',
        template:`
         <div class="container">
         <h3>ShoppingList App</h3>
            <h6>today is: {{today | date:'long'}}</h6>
            <br>
             <shopping-list-item></shopping-list-item>
        </div>

        <ul class="container">
             <div class="row" *ngIf="_shoppingList.length != 0">
                   <ul>
                    <li *ngFor="#shoppingItem of _shoppingList" (click)="onItemSelect(shoppingItem)">{{shoppingItem.name}}({{shoppingItem.amount}})</li>
                  </ul>
             </div>
        </div>

        <div class="container" *ngIf="_isSelected">
            <shopping-list-item-change [selectedItem]="_selectedItem" (deleted)="onDelete()"></shopping-list-item-change>
        </div>

        `,
        directives:[ShoppingListItemComponent, ShoppingListItemChangeComponent],
        providers:[ShoppingListService]

    }
)
export class ShoppingListMainComponent implements OnInit {
    private _isSelected:boolean;
    private _selectedItem: ListItem;
    private _shoppingList:Array<ListItem>;
    private today = new Date();

    constructor(private _shoppingListService: ShoppingListService){}


    onItemSelect(item: ListItem){
        this._isSelected = true;
        this._selectedItem = item;
    }

    onDelete(){
        this._isSelected = false;
    }

    ngOnInit():any {
        this._shoppingList = this._shoppingListService.getItems();
    }
}