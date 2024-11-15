import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './Services/userService';

@Injectable({
  providedIn: 'root' // Το AuthGuard γίνεται διαθέσιμο σε όλη την εφαρμογή
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const userId = this.userService.getUser(); // Παίρνουμε το userId από την υπηρεσία

    if (userId) {
      return true; // Επιτρέπουμε την πρόσβαση αν υπάρχει userId
    } else {
      this.router.navigate(['/']); // Αν δεν υπάρχει userId, ανακατευθύνουμε στη σελίδα login
      return false;
    }
  }
}
