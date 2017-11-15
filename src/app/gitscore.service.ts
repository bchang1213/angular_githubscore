import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class GitscoreService {

	constructor(private _http: Http) { }

	getGitUser(gituserObject){
		var gituserUrl = this._http.get("https://api.github.com/users/" + gituserObject.username);
		return gituserUrl.map(Response=>Response.json()).toPromise();
	}
}
