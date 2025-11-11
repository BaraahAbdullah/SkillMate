import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Specialization } from 'src/app/services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  userSkills: string[] = [];
  bestMatch: Specialization | null = null;
  matchPercentage: number = 0;
  missingSkills: string[] = [];
  specializations: Specialization[] = [];

  constructor(private router: Router, private dataService: DataService) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { userSkills: string[] };
    this.userSkills = state?.userSkills || [];
  }

  ngOnInit() {
    this.specializations = this.dataService.getSpecializations();

    if (this.userSkills.length > 0) {
      this.calculateBestMatch();
    }
  }

  calculateBestMatch() {
    let bestMatchValue = 0;
    let bestMatchSpec: Specialization | null = null;

    for (const spec of this.specializations) {
      const matched = spec.requiredSkills.filter(s => this.userSkills.includes(s));
      const matchPercent = (matched.length / spec.requiredSkills.length) * 100;

      if (matchPercent > bestMatchValue) {
        bestMatchValue = matchPercent;
        bestMatchSpec = spec;
      }
    }

    this.bestMatch = bestMatchSpec;
    this.matchPercentage = Math.round(bestMatchValue);

    if (this.bestMatch) {
      this.missingSkills = this.bestMatch.requiredSkills.filter(
        s => !this.userSkills.includes(s)
      );
    }
  }

  restart() {
    this.router.navigate(['/skills']);
  }
}
