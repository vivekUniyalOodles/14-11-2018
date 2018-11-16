import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  @Output() sideMenuOpen = new EventEmitter();

  public menuOpen = false;
  public userName ;

  //to toggles leftmeu
  sideMenu() {
    if (this.menuOpen == false) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
    this.sideMenuOpen.emit(this.menuOpen);
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }

  ngOnInit() {
    this.userName=localStorage.getItem("user");
  }


}
