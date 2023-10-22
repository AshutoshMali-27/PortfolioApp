import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
project:Project[]=[

// {
// title:'new Title',
// technologies:'',
// description:[]
// },


  {
    title:'Vendor And Shop Management',
    technologies:'Dot net Waveform , git',
    description:[
      'Worked as a team lead to develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
    ]


  },

  {
    title:'E-commerse App',
    technologies:'Dot net core Web Api , Angular,SSMS, git',
    description:[
      'Worked as a team lead to develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
    ]


  },


  {
    title:'Curd Operation',
    technologies:'Dot net core Web Api , Angular,SSMS,, git',
    description:[
      'Worked as a team lead to develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
    ]


  },

  {
    title:'To do List',
    technologies:'React JS , git',
    description:[
      'Worked as a team lead to develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
    ]


  },

  {
    title:'Libray Management System',
    technologies:'Dot Net Core Web API , SSMS , Docker , Angular, Angular Material, git',
    description:[
      'Worked as a team lead to develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
    ]


  },

  {
    title:'Portfolio',
    technologies:'Angular, Angular Material, git',
    description:[
      'Worked as a team lead to develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
    ]
  }
]

constructor() { }


ngOnInit(): void {
    
}

}
