import { Component, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { CustomerService } from 'src/app/components/Admin/customer/state/customer.service';
import { SecurityService } from 'src/app/components/Admin/security/state/security.service';
import { VistiorService } from 'src/app/components/Admin/visitor/state/vistior.service';
import { NavService, Menu } from '../../../../services/nav.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public menuItems: any[];
  public items: any[];

  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string;

  constructor(public navServices: NavService,
              private service:VistiorService,
              private query: SessionQuery,) {
                if(this.query.isRole()=='Customer'){
                  this.service.get().subscribe(menuItems =>  this.items = menuItems.data);
                }else if(this.query.isRole()=='Security'){
                  this.service.get().subscribe(menuItems => this.items = menuItems.data);
                }
   
  }

  ngOnInit() {
    this.service.get().subscribe(menuItems => {console.log(menuItems.data)});
  }

  searchToggle() {
    this.navServices.search = false;
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
      if (!menuItems?.visitor||!menuItems.id) return false
      if (menuItems.visitor.toLowerCase().includes(term)||menuItems.id.includes(term)) {

        items.push(menuItems);
        console.log(items)
      }
      
      this.checkSearchResultEmpty(items)
      this.menuItems = items
    });
  }

  checkSearchResultEmpty(items) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.getElementsByTagName('body')[0].classList.add('offcanvas');
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.getElementsByTagName('body')[0].classList.remove('offcanvas');
  }

}
