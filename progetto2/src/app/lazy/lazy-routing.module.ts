import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { Routes,RouterModule } from "@angular/router"
import { ChiSiamoComponent } from "./chi-siamo/chi-siamo.component"
import { HomeComponent } from "./home/home.component"
import { PrezziComponent } from "./prezzi/prezzi.component"
import { RouterLazyComponent } from './router-lazy/router-lazy.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes:Routes=[
    {
        path:'',
        component:RouterLazyComponent,
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'chi-siamo',
                component:ChiSiamoComponent
            },
            {
                path:'prezzi',
                component:PrezziComponent
            },
            {
                path:"user/:nome",
                component: UserComponent
            },
            {
                path:'checkout/:prodotto',
                component:CheckoutComponent
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