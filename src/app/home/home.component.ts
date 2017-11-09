import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    selectedLanguage = 'Hindi, Hi'
    languages: Array<any>;

    recordingValue: string;

    constructor(){
        this.languages = [
            ["Hindi", "HI"],
            ["English", "EN"],
            ["Punjabi", "PB"],
            ["Kannada", "KA"],
            ["Bengali", "BN"],
            ["Telugu", "TE"],
            ["Gujrati", "GU"],
            ["Marathi", "MR"],
            ["Tamil", "TA"]
        ];
        this.recordingValue = "Start";
    }
    onSelectChange(event){
        var target = event.target;
        //var idAttr = target.attributes.id.nodeValue;
        /*var value = idAttr.nodeValue;*/
        console.log(target.firstChild.data);
        this.selectedLanguage = target.firstChild.data
    }

    ngOnInit(): void {
    }

}
