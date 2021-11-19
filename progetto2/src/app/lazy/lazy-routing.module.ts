import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { Routes,RouterModule } from "@angular/router"
import { ChiSiamoComponent } from "./chi-siamo/chi-siamo.component"
import { HomeComponent } from "./home/home.component"
import { PrezziComponent } from "./prezzi/prezzi.component"

const routes:Routes=[
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'chi-siamo',
                component:ChiSiamoComponent
            },
            {
                path:'prezzi',
                component:PrezziComponent
            }
        ]
    },

    {path:"login", component:LoginComponent}
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class LazyRoutingModule{}