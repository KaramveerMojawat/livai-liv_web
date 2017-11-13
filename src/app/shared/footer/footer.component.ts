import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
backColor: string = 'orange';
fontColor: string = 'white';
copyRightColor: string ='white';
seperatorFontColor: string = 'white'
  constructor(route: ActivatedRoute, private router: Router) {
      router.events.subscribe(
      val => {
        if(val instanceof NavigationEnd) {
          if(this.router.url === '/' || this.router.url === '/home') {
            this.backColor ='rgb(112,19,197)';
            this.fontColor = 'white';
            this.copyRightColor = 'white';
            this.seperatorFontColor = 'white';
            console.log(this.backColor);
          }
          if(this.router.url === '/api') {
            this.fontColor = 'white';
            this.backColor = 'rgb(49,49,57)';
            this.copyRightColor = 'white';
            this.seperatorFontColor = 'white';
          }
          else if(this.router.url === '/company') {
            this.fontColor = 'black';
            this.backColor = 'white';
            this.copyRightColor = 'black';
            this.seperatorFontColor = 'black';
          }
          else if(this.router.url === '/career') {
            this.fontColor = 'black';
            this.backColor = 'white';
            this.copyRightColor = 'black';
            this.seperatorFontColor = 'black';
          }

      }
    });
  }

seperatorFont(){
  return this.seperatorFontColor;
}
getColor(){
  return this.backColor;
}
getFontColor(){
    return this.fontColor;
}
getCopyRightColor(){
    return this.copyRightColor;
}

  ngOnInit() {
  }

}
