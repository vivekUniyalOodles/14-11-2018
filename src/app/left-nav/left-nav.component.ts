import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  @Input() public openSideMenu;


  constructor(@Inject(DOCUMENT) document) { }

  public tagUsed;
  public isCollapsed = true;
  public isSpecial=true;  
  
  public currentClasses: {};
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    'saveable': 1,
    'modified': 1,
    'special':  this.isSpecial
  };
}

  pageChange(tagName){
    console.log(this.openSideMenu);
  }

  addDropdow(getId){
    this.tagUsed=document.getElementById(getId);
    if(this.tagUsed.classList.contains("drop-menu-active")){
      this.tagUsed.classList.remove("drop-menu-active");
    }else{
      this.tagUsed.classList.add("drop-menu-active");
    }
  }

  ngOnInit() {
    this.setCurrentClasses();
    this.currentClasses['saveable']=0;
    // console.log(this.currentClasses['saveable']);

  }
}
