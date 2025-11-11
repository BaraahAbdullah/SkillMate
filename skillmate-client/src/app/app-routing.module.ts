import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SkillsComponent } from './Pages/skills/skills.component';
import { ResultComponent } from './Pages/result/result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: '' } // أي مسار غير معروف يرجع للصفحة الرئيسية
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
