import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  technicalSkills = [
    'HTML',
    'JavaScript',
    'Python',
    'SQL',
    'Data Analysis',
    'UX Design',
    'Cloud Computing',
    'Cybersecurity'
  ];

  softSkills = [
    'Communication',
    'Critical Thinking',
    'Problem Solving',
    'Teamwork',
    'Time Management',
    'Leadership'
  ];

  selectedSkills: Set<string> = new Set();

  constructor(private router: Router) {}

  toggleSkill(skill: string) {
    if (this.selectedSkills.has(skill)) {
      this.selectedSkills.delete(skill);
    } else {
      this.selectedSkills.add(skill);
    }
  }

  isSelected(skill: string): boolean {
    return this.selectedSkills.has(skill);
  }

  reset() {
    this.selectedSkills.clear();
  }

  continue() {
    if (this.selectedSkills.size === 0) {
      alert('يرجى اختيار مهارة واحدة على الأقل 🙂');
      return;
    }

    const skillsArray = Array.from(this.selectedSkills);
    this.router.navigate(['/result'], { state: { userSkills: skillsArray } });
  }
}
