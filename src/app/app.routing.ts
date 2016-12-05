import { PartAComponent } from './part-a/part-a.component';
import { PartBComponent } from './part-b/part-b.component';
 
export const AppRoutes: any = [
    { path: "", component: PartAComponent },
    { path: "page2", component: PartBComponent }
];
 
export const AppComponents: any = [
    PartAComponent,
    PartBComponent
];