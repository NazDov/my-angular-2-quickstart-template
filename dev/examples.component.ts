import {Component} from 'angular2/core'
import {ShoppingListMainComponent} from "./shopping_list_main.component";


@Component(
    {
        selector: 'examples',
        template:`
        <shopping-list-main></shopping-list-main>`
        ,
        directives:[ShoppingListMainComponent]

    }
)
export class ExamplesComponent{

}