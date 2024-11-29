import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any = null;

  setUserData(data: any): void {
    this.userData = data;
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getUserData(): any {
    if (!this.userData) {
      const savedData = localStorage.getItem('userData');
      this.userData = savedData ? JSON.parse(savedData) : null;
    }
    return this.userData;
  }
}
