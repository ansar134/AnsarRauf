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
        "Title": "Calgary International Airport",
        "Content": "I was involved in the design and development of the Interim Sortation solution during the demolition phase of the DTB (Domestic) terminal. I upgraded the existing SCADA systems to include interim check-in conveyor lines (Interim Domestic). I also upgraded the DTB SAC (Sort Allocation Controller which is a Manufacturing Execution System type of software) to include the Sortation system of Interim Domestic. I am currently working on the new SCADA system for IFP and DTB providing regular updates on the SCADA related to the Crisbag (Independent carrier system) upgrading works."
      },
      {
        "Title": "Changi Airport T4 (Singapore)",
        "Content": "I functioned as a developer for SAC (Sort Allocation Controller), Sortation and MES(Manual Encoding Station) for the Terminal 4 BHS system that comprised of Conveyor and Crisbag systems. I have also designed and developed a Middleware Message Broker System to connect to the airport host systems (SITA/ARINC) and SAC. I was also involved in the FAT and on-site commissioning work of the project."
      },
      {
        "Title": "DHL Singapore Hub",
        "Content": "I designed and developed SCADA system for this large-scale logistics automation project comprising of conveyors and 7 sorters (3 loop sorter and 4 line sorters). I also developed the SCADA for Pneumatic system of the plant and incorporated into the main SCADA. I was also involved in the FAT and on-site commissioning work of the project and providing support as Level 2 Hotline support."
      },
      {
        "Title": "Taipei T2 North Concourse (Taiwan)",
        "Content": "I functioned as a Sorter CSC (Sort Controller Software that sits on top of PLCs and collects data and route items based on sorting logics and algorithm, the software has full functional operational GUI) architect and developer for this project. I led the design and development of the sortation solution of the project, writing Detailed Design Documents (DDS) and Functional Design Documents (FDS). I was also involved in the FAT and on-site commissioning work."
      },
      {
        "Title": "Pudong PVG Satellite Terminal",
        "Content": "I functioned as Sorter CSC architect and developer for this large scale BHS project comprising of conveyors, 4 loop sorters and conveyor line base EBS system. I was also the architect and developer for the training system for this project, in-particular I developed the Simulation Commander (a software that governs the simulation of different scenarios by interfacing with High Level Controls software stack and Emulator systems). I also successfully conducted FAT for this project."
      },
      {
        "Title": "SF Express, Beijing",
        "Content": "I functioned as SCADA developer and architect in this project which comprises of conveyors and one loop sorter."
      },
      {
        "Title": "FedEx Sydney, Australia",
        "Content": "I functioned as SCADA developer and architect in this project which comprises of conveyors and one loop sorter."
      },
      {
        "Title": "Nacex Coslada, Spain",
        "Content": "I worked as a developer for the new BEUMER sorter controls (SC), which is a new generation of sorter control software developed using mircoservices based architecture in .Net/C#."
      },
      {
        "Title": "Australia Post Chullora Sydney, Australia",
        "Content": "I am working along side with the SorterCSC architect from Denmark as a developer and commissioning engineer. The project involves complex sorting logics and host communications."
      },

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
