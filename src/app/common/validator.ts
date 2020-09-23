import { Injectable } from "@angular/core";

@Injectable()
export class Validator {
    constructor() {

    }

    validateName(name: string) {
        let result = false;

        if (!!name) {  //It returns false for null,undefined,0,000,"",false.
            name = name.trim();
            let namePattern = /^[a-zA-Z ]+$/;
            result = (namePattern.test(name)) ? true : false;
        }

        return result;
    }

    validateAddress(address: string) {
        let result = false;

        if (!!address) {
            address = address.trim();
            let addressPatern = /^[a-zA-Z0-9 ]*$/;
            result = (addressPatern.test(address)) ? true : false;
        }

        return result;
    }

    validateCity(city: string) {
        let result = false;

        if (!!city) {
            city = city.trim();
            let cityPattern = /^[a-zA-Z ]+$/;
            result = (cityPattern.test(city)) ? true : false;
        }

        return result;
    }

    validatePhoneNum(phoneNum: string) {
        let result = false;

        if (!!phoneNum) {
            phoneNum = phoneNum.trim();
            let phoneNumPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            result = (phoneNumPattern.test(phoneNum)) ? true : false;
        }

        return result;
    }

    validateEmail(email: string) {
        let result = false;

        if (!!email) {
            email = email.trim();
            let emailPattern = /\S+@\S+\.\S+/;
            result = (emailPattern.test(email)) ? true : false;
        }

        return result;
    }

    validateNumber(number: string) {
        let result = false;

        if (!!number) {
            number = number.trim();
            let numberPatern = /^[ 0-9 ]*$/;
            result = (numberPatern.test(number)) ? true : false;
        }

        return result;
    }
}