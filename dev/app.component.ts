import {Component} from 'angular2/core';
import {HomeNavBarComponent} from "./home_navbar.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {WhatsNewComponent} from "./whats_new.component";

@Component({
    selector: 'my-app',
    template: `
        <home-navbar></home-navbar>
        <router-outlet></router-outlet>
    `,
    directives: [HomeNavBarComponent, ROUTER_DIRECTIVES]
})
@RouteConfig(
    [
        {path: '/whats_new', name:'WhatsNew', component: WhatsNewComponent}
    ]
)
export class AppComponent {

}
