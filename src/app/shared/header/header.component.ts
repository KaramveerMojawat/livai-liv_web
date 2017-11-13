import { Component, OnInit, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  closeResult: string;
  /*home: boolean = false;
  api: boolean = false;
  career: boolean = false;
  company: boolean = false;*/
  backColor: string = 'rgb(48,35,174)';

  constructor(private modalService: NgbModal, route: ActivatedRoute, private router: Router) {
    //console.log(' ' + this.home + ' ' + this.api+ ' ' + this.career + ' ' + this.company);
    router.events.subscribe(
      val => {
        if(val instanceof NavigationEnd) {
          if(this.router.url === '/' || this.router.url === '/home') {
            this.backColor='rgb(48,35,174)';
          }
          if(this.router.url === '/api') {
            this.backColor='black';
          }
          else if(this.router.url === '/company') {
            this.backColor='rgb(31,178,211)';
          }
          else if(this.router.url === '/career') {
            this.backColor='black';
          }

      }
    });
  }
getColor(){
  return this.backColor;
}
isCollapsed: boolean = false;

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }).catch((reason) => {
      console.log(reason);
    });
  }

  ngOnInit() {
  }
      onSubmit(form: NgForm){
        console.log(form);
    }

}
