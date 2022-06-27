import { Component, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/auth/state/session.query';
<<<<<<< HEAD
=======
import { CustomerService } from 'src/app/components/Admin/customer/state/customer.service';
import { SecurityService } from 'src/app/components/Admin/security/state/security.service';
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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

<<<<<<< HEAD
  constructor(public navServices: NavService ,private service:VistiorService,private query: SessionQuery,) {
    if(this.query.isRole()=='Customer'){
      this.service.get().subscribe(menuItems =>  this.items = menuItems.data);
    }else if(this.query.isRole()=='Security'){
      this.service.get().subscribe(menuItems => this.items = menuItems.data);
    }else if(this.query.isRole()=='Admin'||this.query.isRole()=='Super Admin'){
      this.service.get().subscribe(menuItems => this.items = menuItems.data);
    }
   // this.navServices.items.subscribe(menuItems => this.items = menuItems);
=======
  constructor(public navServices: NavService,
              private service:VistiorService,
              private query: SessionQuery,) {
                if(this.query.isRole()=='Customer'){
                  this.service.get().subscribe(menuItems =>  this.items = menuItems.data);
                }else if(this.query.isRole()=='Security'){
                  this.service.get().subscribe(menuItems => this.items = menuItems.data);
                }
   
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
  }

  ngOnInit() {
    this.service.get().subscribe(menuItems => {console.log(menuItems.data)});
<<<<<<< HEAD

=======
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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
<<<<<<< HEAD
      if (menuItems.visitor.toLowerCase().includes(term)||menuItems.contact_number.includes(term)) {
=======
      if (menuItems.visitor.toLowerCase().includes(term)||menuItems.id.includes(term)) {
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4

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
