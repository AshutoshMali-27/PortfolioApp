import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

educationList: Education[]=[

  {
    institute:'Gandhi Bal Mandir High School',
    course:'SSC',
    duration:'2013-2014',
    score:'73%',
  },

  {
    institute:'Karthika High School and Junior College',
    course:'HSC',
    duration:'2014-2016',
    score:'67%',
  },
  {
    institute:'Vidyalankar Institute Of Technology',
    course:'B.E.',
    duration:'2016-2020',
    score:'73%',
  },

]


  constructor(){}

ngOnInit(): void {
    
}

}
