import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

// Menu
export interface Menu {
	headTitle1?: string,
	headTitle2?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search: boolean = false;

	// Language
	public language: boolean = false;
	
	// Mega Menu
	public megaMenu: boolean = false;
	public levelMenu: boolean = false;
	public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

	// Full screen
	public fullScreen: boolean = false;

	constructor(private router: Router) {
		this.setScreenWidth(window.innerWidth);
		fromEvent(window, 'resize').pipe(
			debounceTime(1000),
			takeUntil(this.unsubscriber)
		).subscribe((evt: any) => {
			this.setScreenWidth(evt.target.innerWidth);
			if (evt.target.innerWidth < 991) {
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			}
			if(evt.target.innerWidth < 1199) {
				this.megaMenuColapse = true;
			}
		});
		if(window.innerWidth < 991) { // Detect Route change sidebar close
			this.router.events.subscribe(event => { 
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			});
		}
	}

	ngOnDestroy() {
		this.unsubscriber.next();
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: Menu[] = [
		{ path: 'SuperAdmin', title: ' Dashboard' , icon:'home', type: 'link' },
			{
			title: 'Clients', icon: 'users', type: 'sub', active: false, children: [
			{ path: 'SuperAdmin/clients', title: ' Client' , type: 'link' },
			{ path: 'SuperAdmin/addclient', title: 'Add New Client' , type: 'link' },
			
		]
	},
	             
				
			{ 
				title: 'customers', icon: 'users', type: 'sub', active: false, children: [
					{ path: 'SuperAdmin/customers', title: 'Customers', type: 'link' },
					{ path: 'SuperAdmin/addcustomer', title: 'Add New Customer' , type: 'link' },
					
				]	
			},
			{ 
				title: 'security', icon: 'users', type: 'sub', active: false, children: [
					{ path: 'SuperAdmin/security', title: 'Security', type: 'link' },
					{ path: 'SuperAdmin/addsecurity', title: 'Add New Security' , type: 'link' },
					
				]		
			},
			{ 
				title: 'Visitors', icon: 'users', type: 'sub', active: false, children: [
					{ path: 'SuperAdmin/visitors', title: 'Visitor', type: 'link' },
					
					
				]		
			},
				
			{ 
				title: 'Account', type: 'sub', icon:'user',active: true, children: [
					{ path: 'SuperAdmin/user', title: 'View Account', type: 'link' },
					
					{ path: 'SuperAdmin/editprofile', title: 'Edit Account', type: 'link' },
				]		
			},
		
			//{ path: 'login', title: 'Logout',active: false, type: 'link' },
			
			
		
	];
	MENUITEMSSECURIY: Menu[] = [
		{
			title: 'Dashboard', icon:'home', type: 'sub', active: false, children: [
			{ path: 'security', title: ' Dashboard' , type: 'link' },
			
			 
		]
	},
			{ 
				title: 'security', icon: 'users', type: 'sub', active: false, children: [
					{ path: 'security/visitors', title: 'MyVisitors', type: 'link' },
					{ path: 'security/addRquest', title: 'Add New Request' , type: 'link' },
					
				]		
			},
			
			{ 
				title: 'Account', type: 'sub', active: false, children: [
					{ path: 'security/user', title: 'View Account', type: 'link' },
					
					{ path: 'security/editprofile', title: 'Edit Account', type: 'link' },
				]		
			},
			
		
			//{ path: 'admin/visitors', title: 'Logout', type: 'link' },		
	];
	MENUITEMSCUSTOMER: Menu[] = [
		{ path: 'customer', title: ' Dashboard' ,icon:'home', type: 'link' },
		{ 
			title: 'Customer', icon: 'users', type: 'sub', active: false, children: [
				{ path: 'customer/visitors', title: 'visitors', type: 'link' },
				{ path: 'customer/addvisitor', title: 'Add Visitor' , type: 'link' },
				{ path: 'customer/report', title: 'My Report' , type: 'link' },
				
			]		
		},
	
		{ 
			title: 'Account', type: 'sub', active: false, children: [
				{ path: 'customer/user', title: 'View Account', type: 'link' },
				
				{ path: 'customer/editprofile', title: 'Edit Account', type: 'link' },
			]		
		},
	
			
		
		
		
	
];
MENUITEMSCLIENT: Menu[] = [
	{ path: 'client', title: ' Dashboard' ,icon:'home', type: 'link' },
	{ 
		title: 'Customer', icon: 'users', type: 'sub', active: false, children: [
			{ path: 'client/customers', title: 'Customer', type: 'link' },
			{ path: 'client/addcustomer', title: 'Add New Customer' , type: 'link' },
			
		]		
	},
	{ 
		title: 'security', icon: 'users', type: 'sub', active: false, children: [
			{ path: 'client/security', title: 'Security', type: 'link' },
			{ path: 'client/addsecurity', title: 'Add New Security' , type: 'link' },
		
			
		]		
	},
	{ 
		title: 'Account', type: 'sub', active: false, children: [
			{ path: 'client/user', title: 'View Account', type: 'link' },
			
			{ path: 'client/editprofile', title: 'Edit Account', type: 'link' },
		]		
	},

		
	
	
	

];

	MEGAMENUITEMS: Menu[] = [
	
	
		{
			title: 'Usefull Pages', type: 'sub', active: false, children: [
				{ path: 'javascript:void(0);', title: 'Search Pages', type: 'extLink' },
				{ path: 'javascript:void(0);', title: 'Unlock User', type: 'extLink' },
				{ path: 'javascript:void(0);', title: 'Forgot Password', type: 'extLink' },
				{ path: 'javascript:void(0);', title: 'Reset Password', type: 'extLink' },
				{ path: 'javascript:void(0);', title: 'Maintenance', type: 'extLink' }
			]
		},
		{
			title: 'Email templates', type: 'sub', active: false, children: [
				{ path: 'http://admin.pixelstrap.com/cuba/theme/basic-template.html', title: 'Basic Email', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/email-header.html', title: 'Basic With Header', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/template-email.html', title: 'Ecomerce Template', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/template-email-2.html', title: 'Email Template 2', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/ecommerce-templates.html', title: 'Ecommerce Email', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/email-order-success.html', title: 'Order Success', type: 'extTabLink' }
			]
		},
		{
			title: 'Coming Soon', type: 'sub', active: false, children: [
				{ path: 'javascript:void(0);', title: 'Coming Simple', type: 'extLink' },
				{ path: 'javascript:void(0);', title: 'Coming BG Image', type: 'extLink' },
				{ path: 'javascript:void(0);', title: 'Coming BG Video', type: 'extLink' }
			]
		},
	];

	LEVELMENUITEMS: Menu[] = [
		{
			title: 'Users', icon: 'users', type: 'sub', active: false, children: [
			
				{ path: 'security/user', title: 'User Profile', icon: 'users', type: 'link' },
				{ path: 'javascript:void(0);', title: 'Edit Profile', icon: 'users', type: 'link' },
			]
		},
		];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	itemsecurity = new BehaviorSubject<Menu[]>(this.MENUITEMSSECURIY);
	itemCustomer = new BehaviorSubject<Menu[]>(this.MENUITEMSCUSTOMER);
	itemClient= new BehaviorSubject<Menu[]>(this.MENUITEMSCLIENT)
	megaItems = new BehaviorSubject<Menu[]>(this.MEGAMENUITEMS);
	levelmenuitems = new BehaviorSubject<Menu[]>(this.LEVELMENUITEMS);

}
