import {Component} from '@angular/core';

@Component({
   selector:'app-warning-alert' ,
   templateUrl:'./WarningAlert.component.html',
   styleUrls: ['./WarningAlert.component.css']
})

export class WarningAlertComponent{
displaySecret=false;
count:number=0;
log:number[]=[];
showme:number[]=[];

onClick(){
   this.displaySecret=!this.displaySecret;
   this.count+=1;
   this.log.push(this.count);
  
}

getWhite(x:number){
   if(x>=5){
     
      return true;
   
   }
   else{
    
      return false;
   }
}



}