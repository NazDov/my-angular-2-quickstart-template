
import {Component} from 'angular2/core'
import {ShoppingListService} from "./service/shopping_list.service";
import {ListItem} from "./list-item";


@Component(
    {
        selector: 'shopping-list-item',
        template:`
            <div class="form-inline">
            <form role="form" (ngSubmit)="onSubmit(f)" #f="ngForm">
                 <div class="form-group">
                 <label for="item">Item: </label>
                  <input type="text" ngControl="name" id="item" class="form-control"
                   placeholder="item name.." [(ngModel)]="item.name" required>
                 </div>
                 <div class="form-group">
                 <label for="amount">Amount: </label>
                  <input type="text" ngControl="amount" id="amount" class="form-control" [(ngModel)]="item.amount" required>
                 </div>
                    <button type="submit" class="btn btn-primary btn-sm" [disabled]="!f.valid">Add</button>
              </form>
            </div>

        `,

    }
)
export class ShoppingListItemComponent{
    private item:ListItem = {name:'', amount:0};

    constructor(private _shoppingListService: ShoppingListService){}

    onSubmit(form){
        console.log(form.controls);
        this._shoppingListService.addItem({name:this.item.name, amount:this.item.amount});
    }

}