import {Component} from 'angular2/core';
import {WhatsNewComponent} from "./whats_new.component";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HowToInstallComponent} from "./how_to_install.component";
import {ExamplesComponent} from "./examples.component";


@Component({
    selector: 'my-app',
    templateUrl:'templates/home_navbar.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(
    [{path:'/whats_new', name:'WhatsNew', component:WhatsNewComponent},
        {path:'/how_to_install', name:'HowToInstall', component:HowToInstallComponent},
        {path:'/examples', name:'Examples', component:ExamplesComponent}
    ]
)
export class AppComponent {

}
