import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {

    constructor(
        private router: Router
    ) { }



    skillsFrontEnd = ['angular', 'ionic', 'html', 'css', 'javascript'];
    skillsBackEnd = ['node.js', 'express.js', 'sequalize'];


    goBack() {
        this.router.navigate(['/home']);
    }
}