import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
    if(state.url=="/dashboard" && !localStorage.getItem("user")){           
      this.router.navigate(["/"]);
      return false;
    }
    if((state.url=="/" || state.url=="/register" || state.url=="/forgot-password") && localStorage.getItem("user")){           
      this.router.navigate(["/dashboard"]);
      return false;
    }

    // if(localStorage.getItem("user")){
    //   console.log("hi");
    //   this.router.navigate(["/dashboard"]);
    //   return false;
    // }else{
    //   console.log("by");
    //   this.router.navigate(["/"]);
    //   return false;
    // }

    return true;
  }
}


