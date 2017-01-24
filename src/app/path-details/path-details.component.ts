import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Path } from '../path.model';
import { PathService } from '../path.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.css'],
  providers: [PathService]
})

export class PathDetailsComponent implements OnInit {
  // paths: Path[];
  pathId: number;
  pathToDisplay: Path;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pathService: PathService) { }

  ngOnInit() {
    //this.paths = this.pathService.getPaths();
    this.route.params.forEach((urlParam) => {
      this.pathId = parseInt(urlParam['id']);
    });
    this.pathToDisplay = this.pathService.getPathById(this.pathId);
    console.log(this.pathToDisplay);
  }

}
