import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private loading1: boolean = false;
    private loading2: boolean = false;
    private loading3: boolean = false;


    getLoading1(): boolean {
        return this.loading1;
    }

    setLoading1(value: boolean) {
        this.loading1 = value;
    }

    getLoading2(): boolean {
        return this.loading2;
    }

    setLoading2(value: boolean) {
        this.loading2 = value;
    }

    getLoading3(): boolean {
        return this.loading3;
    }

    setLoading3(value: boolean) {
        this.loading3 = value;
    }
}
