import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  
  prjs = {
    "projects": [
      {
        "Title": "Title 1",
        "Content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam doloremque perspiciatis in ducimus fugiat autem praesentium quia consectetur quas sequi ea molestiae, recusandae et nemo voluptate ad magni voluptatem!"
      },
      {
        "Title": "Title 2",
        "Content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam doloremque perspiciatis in ducimus fugiat autem praesentium quia consectetur quas sequi ea molestiae, recusandae et nemo voluptate ad magni voluptatem!"
      },
      {
        "Title": "Title 3",
        "Content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam doloremque perspiciatis in ducimus fugiat autem praesentium quia consectetur quas sequi ea molestiae, recusandae et nemo voluptate ad magni voluptatem!"
      },
      {
        "Title": "Title 4",
        "Content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam doloremque perspiciatis in ducimus fugiat autem praesentium quia consectetur quas sequi ea molestiae, recusandae et nemo voluptate ad magni voluptatem!"
      },
      {
        "Title": "Title 5",
        "Content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam doloremque perspiciatis in ducimus fugiat autem praesentium quia consectetur quas sequi ea molestiae, recusandae et nemo voluptate ad magni voluptatem!"
      },
      {
        "Title": "Title 6",
        "Content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam doloremque perspiciatis in ducimus fugiat autem praesentium quia consectetur quas sequi ea molestiae, recusandae et nemo voluptate ad magni voluptatem!"
      },
      {
        "Title": "Title 7",
        "Content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam doloremque perspiciatis in ducimus fugiat autem praesentium quia consectetur quas sequi ea molestiae, recusandae et nemo voluptate ad magni voluptatem!"
      }
    ]
  };
  
  constructor() { 
   }
   

  ngOnInit() {
  }

  projectIdxTrack(index, project)
  {
    return project.id;
  }

}
