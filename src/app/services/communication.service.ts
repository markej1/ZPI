import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
    private onNgOnInitCompleted = new Subject<void>();

    notifyNgOnInitCompleted() {
        this.onNgOnInitCompleted.next();
    }

    onNgOnInitCompleted$() {
        return this.onNgOnInitCompleted.asObservable();
    }
    constructor() { }
}
