import {Injectable} from "angular2/core";
import {DATA_LIST} from "./mock_save_data";

@Injectable()
export class SaveDataService {


    save(data:string) {
        console.log('saving data to list', data);
        DATA_LIST.push(data);
    }

    delete(data:string) {
        console.log('removing data to list', data);
        DATA_LIST.slice(DATA_LIST.indexOf(data), 1);
    }

    getAll():string[]{
        return DATA_LIST;
    }

}