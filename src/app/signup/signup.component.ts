import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TeamService } from '../services/team.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [TeamService],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    teamArray = [];
    _teamService: TeamService;
    constructor(teamService: TeamService) {
        this._teamService = teamService;
    }

    ngOnInit() {
        this._teamService.getAllEnableTeams().subscribe(data => {
            this.teamArray = data.json();
            alert(this.teamArray.length);
        });
    }
}
