import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { GitscoreService  } from './../gitscore.service';

@Component({
	selector: 'app-githubform',
	templateUrl: './githubform.component.html',
	styleUrls: ['./githubform.component.css']
})
export class GithubformComponent implements OnInit {
	user: User;

	constructor(private _gitscoreService: GitscoreService) { }

	ngOnInit() {
		this.user = new User();
	}

	callGithub(){
		console.log(this.user);
		this._gitscoreService.getGitUser(this.user).then((data)=>{
			console.log("then: ", data);
			this.user.username = data.login;
			this.user.public_repos = data.public_repos;
			this.user.followers = data.followers;
			this.user.score = this.user.public_repos + this.user.followers;
			console.log("data retrieved:", this.user);
		})
		.catch((error)=>{
			console.log(error);
		})
		this.user = new User();
	}

	}
