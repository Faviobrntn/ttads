import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {
  
	constructor() { }
	  
	validate(password: string): any {
		return 	this.checkLength(password) && 
				this.checkUppercase(password) && 
				this.checkLowercase(password);
	}

	private checkLength(password: string) {
		return password.length >= 8;
	}

	private checkLowercase(password: string) {
		return password.match('.*[a-z].*') !== null;
	}

	private checkUppercase(password: string) {
		return password.match('.*[A-Z].*') !== null;
	}
}


