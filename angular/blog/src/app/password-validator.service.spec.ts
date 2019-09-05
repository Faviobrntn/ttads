import { TestBed } from '@angular/core/testing';

import { PasswordValidatorService } from './password-validator.service';

describe('PasswordValidatorService', () => {
  	beforeEach(() => TestBed.configureTestingModule({}));

  	it('should be created', () => {
    	const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    	expect(service).toBeTruthy();
  	});
	  
	
	it('should validate empty password', () => {
    	const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    	expect(service.validate('')).toBeFalsy();
  	});
	
	it('should validate 8 digits password', () => {
    	const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    	expect(service.validate('12345678')).toBeFalsy();
  	});
	
	it('should validate Uppercase and lowercase letters password', () => {
    	const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
		expect(service.validate('A12345678a')).toEqual(true);
  	});
	
	it('should NOT validate Uppercase and lowercase letters password', () => {
    	const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    	expect(service.validate('A12345678')).toEqual(false);
  	});
	
	
	  it('should validate symbols password', () => {
    	const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
		expect(service.validate('aA123!!""#$@')).toEqual(true);
  	});
});
