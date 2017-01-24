import { Component, OnInit } from '@angular/core';
import { Path } from '../path.model';
import { PathService } from '../path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css'],
  providers: [PathService]
})
export class StartGameComponent implements OnInit {
  title: string = "Choose Your Own Adventure";
  paths: Path[];

  constructor(private router: Router, private pathService: PathService) {}

  ngOnInit() {
    this.paths = this.pathService.getPaths();
  }

  startGame() {
    this.router.navigate(['paths'], 1);
  }

}
