import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class UserService{

    private userId:number;

getUser(){
  const storedId = localStorage.getItem('userId'); 
  this.userId = storedId ? +storedId : null;
    return this.userId;
}

setUserId(user:number){
   this.userId=user;
   localStorage.setItem('userId',this.userId.toString());
}

clearUserData(): void {
    this.userId = null;
    localStorage.removeItem('userId');
  }

}