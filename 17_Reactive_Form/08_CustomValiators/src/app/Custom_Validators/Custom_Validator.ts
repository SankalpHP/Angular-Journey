import { AbstractControl,ValidationErrors } from "@angular/forms";

export function convertToUpperCase(control:AbstractControl):ValidationErrors|null{
    const userName:string = control.value as string;
    if(userName !== userName.toUpperCase()){
       control.setValue(userName.toUpperCase());
    }
    return null;
}

export function urlValidatior(control:AbstractControl):ValidationErrors|null{
   
    const dominExt = ['.com','.in','.me','.org'];

    if(!control.value.startsWith('https://')){
        return {urlValid:true};
    }

    const checkExtension = dominExt.some((extension) => control.value.includes(extension));

    if(!checkExtension){
        return {urlValid:true}
    }


    return null;
}