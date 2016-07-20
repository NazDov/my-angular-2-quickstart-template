import {Injectable} from 'angular2/core'
import {shoppingList} from "./shopping_list.data";
import {ListItem} from "../list-item";


@Injectable()
export class ShoppingListService{

    getItems(){
        return shoppingList;
    }

    addItem(item:ListItem){
        shoppingList.push(item);
    }


    deleteItem(item:ListItem){
        shoppingList.splice(shoppingList.indexOf(item),1);
    }

}