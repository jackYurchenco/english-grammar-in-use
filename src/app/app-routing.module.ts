import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import(`./lessons/lessons.module`).then((module) => module.LessonsModule),
		path: ``
	},
  {
    loadChildren: () => import(`./not-found/not-found.module`).then((module) => module.NotFoundModule),
		path: `**`
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
