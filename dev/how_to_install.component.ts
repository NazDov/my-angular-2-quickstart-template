import {Component} from 'angular2/core'
import {SaveDataService} from "./service/save_data.service";
import {OnInit} from "angular2/core";

@Component(
    {
        //selector: 'how-to-install',
        templateUrl: 'templates/how_to_install.html',
        providers: [SaveDataService]

    }
)
export class HowToInstallComponent implements OnInit {
    templateName:string = "Installation Guideline";
    status:string = '';
    localDataList:string[];

    constructor(private saveDataService:SaveDataService) {
    }

    ngOnInit():any {
        console.log('data list was initialized')
        this.localDataList = this.saveDataService.getAll();
    }

    isPositive(status:string):boolean {
        if (status.match('yes')) {
            return true;
        }
        return false;
    }

    saveDetails(details:string) {
        this.saveDataService.save(details);
    }

}