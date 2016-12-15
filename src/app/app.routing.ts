import { PartAComponent } from './part-a/part-a.component';
import { PartBComponent } from './part-b/part-b.component';
import { HomepageComponent } from './homepage/homepage.component';
 
export const AppRoutes: any = [
    { path: "", component: PartAComponent },
    { path: "page2", component: PartBComponent },
    { path: "homepage", component: HomepageComponent}
];
 
export const AppComponents: any = [
    PartAComponent,
    PartBComponent,
    HomepageComponent
];