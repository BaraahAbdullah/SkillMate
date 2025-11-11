import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  type: 'technical' | 'soft';
}

export interface Specialization {
  name: string;
  description: string;
  requiredSkills: string[];
  recommendedCourses: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // 🧰 المهارات
  skills: Skill[] = [
    // المهارات التقنية
    { name: 'HTML', type: 'technical' },
    { name: 'CSS', type: 'technical' },
    { name: 'JavaScript', type: 'technical' },
    { name: 'TypeScript', type: 'technical' },
    { name: 'Python', type: 'technical' },
    { name: 'SQL', type: 'technical' },
    { name: 'UX Design', type: 'technical' },
    { name: 'Cloud Computing', type: 'technical' },
    { name: 'Cybersecurity', type: 'technical' },

    // المهارات الناعمة
    { name: 'Communication', type: 'soft' },
    { name: 'Teamwork', type: 'soft' },
    { name: 'Problem Solving', type: 'soft' },
    { name: 'Leadership', type: 'soft' },
    { name: 'Critical Thinking', type: 'soft' },
    { name: 'Time Management', type: 'soft' },
    { name: 'Creativity', type: 'soft' }
  ];

  // 🧭 التخصصات
  specializations: Specialization[] = [
    {
      name: 'تطوير الويب',
      description: 'تصميم وبناء المواقع والتطبيقات الإلكترونية.',
      requiredSkills: ['HTML', 'CSS', 'JavaScript', 'UX Design', 'Communication'],
      recommendedCourses: [
        'Frontend Developer Bootcamp',
        'JavaScript Mastery',
        'Responsive Web Design'
      ]
    },
    {
      name: 'تحليل البيانات',
      description: 'جمع وتحليل البيانات لاستخلاص رؤى تساعد في اتخاذ القرار.',
      requiredSkills: ['Python', 'SQL', 'Critical Thinking', 'Problem Solving'],
      recommendedCourses: [
        'Google Data Analytics',
        'Python for Data Science',
        'Excel to MySQL'
      ]
    },
    {
      name: 'الأمن السيبراني',
      description: 'حماية الأنظمة والشبكات من الهجمات الإلكترونية.',
      requiredSkills: ['Cybersecurity', 'Problem Solving', 'Leadership'],
      recommendedCourses: [
        'Introduction to Cybersecurity',
        'CompTIA Security+',
        'Network Security Essentials'
      ]
    },
    {
      name: 'إدارة المشاريع',
      description: 'قيادة الفرق وتحقيق الأهداف ضمن الوقت والميزانية المحددة.',
      requiredSkills: ['Leadership', 'Communication', 'Time Management', 'Teamwork'],
      recommendedCourses: [
        'Google Project Management',
        'Agile PM',
        'PMP Prep'
      ]
    },
    {
      name: 'الحوسبة السحابية',
      description: 'تصميم وإدارة الخدمات على السحابة مثل AWS وAzure.',
      requiredSkills: ['Cloud Computing', 'Problem Solving', 'Communication'],
      recommendedCourses: [
        'AWS Cloud Practitioner',
        'Azure Fundamentals',
        'Google Cloud Basics'
      ]
    }
  ];

  getSkillsByType(type: 'technical' | 'soft') {
    return this.skills.filter(s => s.type === type);
  }

  getAllSkills() {
    return this.skills;
  }

  getSpecializations() {
    return this.specializations;
  }
}
