
export class ValidUtil {

  public static isNullOrUndefined(data: any): boolean{
    if(null == data || undefined == data){
      return true;
    }else{
      return false;
    }
  }

}
