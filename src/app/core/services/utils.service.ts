import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from '@app/shared/models/constants.model';

@Injectable()
export class UtilsService {

    constructor(private constants:Constants){

    }

    public validateEmail(email : string) {
        var condition = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return condition.test(String(email).toLowerCase());
    }

}