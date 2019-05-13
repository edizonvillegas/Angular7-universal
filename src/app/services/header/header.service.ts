import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

	constructor(private _http: HttpClient) {}

	getHeader() {
		return this._http.get('https://bff-prod-ios.iwant.ph/api/OneCms/cmsapi/OTT/getHeader')
	}

}
