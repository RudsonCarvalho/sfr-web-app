import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders,HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

// MODELS
import { Constants } from '@app/shared/models/constants.model';
import { QueryParams } from '@app/shared/models/queryparams.model';

// SERVICES
import { UtilsService } from './utils.service';

@Injectable()
export class ConnectionService {

    private endpointAddress : string = "http://192.168.0.1";
    private endpointPort : string = ":10010";
    private connectionTag : string = "CONNECTION";

    constructor (
        private angularHttp: HttpClient,
        private constants: Constants,
        private queryParams: QueryParams,        
        private utils:UtilsService) {

        }

        private buildQueries(queryparams:Array<QueryParams>) : string {
            var fullQuery = "";
            if (queryparams && queryparams.length > 0) {
              fullQuery += "?";
              for (let param of queryparams) {
                fullQuery += param.paramName + "=" + param.paramValue + "&";
              }
              fullQuery = fullQuery.substring(0,fullQuery.length-1);
            }
            return fullQuery;
        }

}