import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu, NavService } from '../../services/nav.service';
import { LayoutService } from '../../services/layout.service';
import { SessionQuery } from 'src/app/auth/state/session.query';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  public iconSidebar;
  public menuItems: Menu[];
  public url: any;
  public fileurl: any;
route:string;
  // For Horizontal Menu
  public margin: any = 0;
  public width: any = window.innerWidth;
  public leftArrowNone: boolean = true;
  public rightArrowNone: boolean = false;
  route: string;

  constructor(private router: Router, public navServices: NavService,
    private query: SessionQuery,
    public layout: LayoutService) {
      if(this.query.isRole()=='Security'){
        this.route='/security'
        this.navServices.itemsecurity.subscribe(menuItems => {
          this.menuItems = menuItems;
        
          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              menuItems.filter(items => {
                if (items.path === event.url) {
                  this.setNavActive(items);
                }
                if (!items.children) { return false; }
                items.children.filter(subItems => {
                  if (subItems.path === event.url) {
                    this.setNavActive(subItems);
                  }
                  if (!subItems.children) { return false; }
                  subItems.children.filter(subSubItems => {
                    if (subSubItems.path === event.url) {
                      this.setNavActive(subSubItems);
                    }
                  });
                });
              });
            }
          });
        });
      }else if (this.query.isRole()=='Admin'||this.query.isRole()=='Super Admin') {
<<<<<<< HEAD
        this.route='/SuperAdmin'
=======
        this.route='/admin'
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
        this.navServices.items.subscribe(menuItems => {
          this.menuItems = menuItems;
        
          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              menuItems.filter(items => {
                if (items.path === event.url) {
                  this.setNavActive(items);
                }
                if (!items.children) { return false; }
                items.children.filter(subItems => {
                  if (subItems.path === event.url) {
                    this.setNavActive(subItems);
                  }
                  if (!subItems.children) { return false; }
                  subItems.children.filter(subSubItems => {
                    if (subSubItems.path === event.url) {
                      this.setNavActive(subSubItems);
                    }
                  });
                });
              });
            }
          });
        });
      }else if(this.query.isRole()=='Customer'){
        this.route='/customer'
        this.navServices.itemCustomer.subscribe(menuItems => {
          this.menuItems = menuItems;
        
          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              menuItems.filter(items => {
                if (items.path === event.url) {
                  this.setNavActive(items);
                }
                if (!items.children) { return false; }
                items.children.filter(subItems => {
                  if (subItems.path === event.url) {
                    this.setNavActive(subItems);
                  }
                  if (!subItems.children) { return false; }
                  subItems.children.filter(subSubItems => {
                    if (subSubItems.path === event.url) {
                      this.setNavActive(subSubItems);
                    }
                  });
                });
              });
            }
          });
        });
      }
      else if(this.query.isRole()=='Client'){
        this.route='/client'
        this.navServices.itemClient.subscribe(menuItems => {
          this.menuItems = menuItems;
        
          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              menuItems.filter(items => {
                if (items.path === event.url) {
                  this.setNavActive(items);
                }
                if (!items.children) { return false; }
                items.children.filter(subItems => {
                  if (subItems.path === event.url) {
                    this.setNavActive(subItems);
                  }
                  if (!subItems.children) { return false; }
                  subItems.children.filter(subSubItems => {
                    if (subSubItems.path === event.url) {
                      this.setNavActive(subSubItems);
                    }
                  });
                });
              });
            }
          });
        });
      }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth - 500;
  }

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) { return false; }
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }
ngOnInit()
{
  this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
}
  // For Horizontal Menu
  scrollToLeft() {
    if (this.margin >= -this.width) {
      this.margin = 0;
      this.leftArrowNone = true;
      this.rightArrowNone = false;
    } else {
      this.margin += this.width;
      this.rightArrowNone = false;
    }
  }

  scrollToRight() {
    if (this.margin <= -3051) {
      this.margin = -3464;
      this.leftArrowNone = false;
      this.rightArrowNone = true;
    } else {
      this.margin += -this.width;
      this.leftArrowNone = false;
    }
  }
  

}
