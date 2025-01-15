import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators{
 static passwordStrength():ValidatorFn{
    return (control : AbstractControl): ValidationErrors | null =>{
        const value = control.value;
        if(!value){
            return null;
        }

        const hasNumber = /[0-9]/.test(value);
        const hasUpper = /[A-Z]/.test(value);
        const haslower = /[a-z]/.test(value);
        const isValidlength = value.length >=8;
        const passwordvalid = hasNumber && hasUpper && haslower && isValidlength;

        return !passwordvalid ? {passwordstrength:true} : null;
    }
 }

static matchPassword() : ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null =>{
       const retypepassword = control.value;
       const password = control.parent?.get('password')!.value;
       if(retypepassword === password)
       {
        return null
       }
       else
       {
        return {passwordmismatch : true}
       }

    }
}

static matchPasswordForm (form : AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value
    const retypepassword = form.get('retypepassword')?.value
    if(password === retypepassword){
       return  null
    }
    else{
        return {passwordmismatch : true}
    }
}



}