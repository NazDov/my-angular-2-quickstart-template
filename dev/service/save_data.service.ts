import {Injectable} from "angular2/core";

@Injectable()
export class SaveDataService {

    dataList:string[] = [];

    save(data:string) {
        console.log('saving data to list', data);
        this.dataList.push(data);
    }

    delete(data:string) {
        console.log('removing data to list', data);
        this.dataList.slice(this.dataList.indexOf(data), 1);
    }

    getAll():string[]{
        return this.dataList;
    }

}