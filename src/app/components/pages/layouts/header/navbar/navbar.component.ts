import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../../../services/header/header.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	toggle: boolean = false
	toggleSub: boolean = false
	headerMenu: Object
	dropdown: string = 'dropdown-menu'
	mq = window.matchMedia( "(max-width: 991px)" );


	constructor(
		private _header: HeaderService,
		private _router: Router
	) { }


	ngOnInit() {
		this.toggle = false
		this._header.getHeader().subscribe(data => {
			this.headerMenu = data
		})

	}

	countLi(i) {
		if (!this.mq.matches) {
			let ddown = document.querySelectorAll('.dropdown'),
				countLi = ddown[i].querySelectorAll('.sub li').length
			if (countLi > 5) {
				ddown[i].querySelector('.sub').classList.add('subMenus')
			}
		}
	}

	collapse() {
		let menuList = document.querySelectorAll('.navbar-nav .nav-item .dropdown-menu'),
			ddown = document.querySelectorAll('.navbar-nav .dropdown')

		if (this.toggle == false) {
			this.toggle = true
		} else {
			this.toggle = false

			for (var x = 0; x < menuList.length; x++) {
				menuList[x].classList.remove('showSubMenu')
				ddown[x].classList.remove('showSubMenu')
			}
		}

	}

	toggleSubMenu(i, url) {
		if (this.mq.matches) {
			let menuList = document.querySelectorAll('.navbar-nav .nav-item .dropdown-menu'),
				ddown = document.querySelectorAll('.navbar-nav .dropdown')

			if (ddown[i].classList.contains('showSubMenu') ) {
				menuList[i].classList.remove('showSubMenu')
				ddown[i].classList.remove('showSubMenu')
			} else {
				menuList[i].classList.add('showSubMenu')
				ddown[i].classList.add('showSubMenu')
			}
		}
	}

}
