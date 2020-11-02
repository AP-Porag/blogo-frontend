import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from '../components/HomeComponent.vue';
import AboutComponent from '../components/about/AboutComponent.vue';
import ServiceComponent from '../components/service/ServicesComponent.vue';
import PortfolioComponent from '../components/portfolio/PortFolioComponent.vue';
import PortfolioDetailsComponent from '../components/portfolio/PortfolioDetailsComponent.vue';
import TestimonialComponent from '../components/testimonial/TestimonialComponent.vue';
import PricingComponent from '../components/pricing/PricingComponent.vue';
import BlogComponent from '../components/blog/BlogComponent.vue';
import BlogSingleComponent from '../components/blog/BlogSingleComponent.vue';
import ContactComponent from '../components/contact/ContactComponent.vue';
import ExampleComponent from '../components/ExampleComponent.vue';

const routes = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component: HomeComponent,
            name:'home'
        },
        {
            path:'/about',
            component: AboutComponent,
            name:'about'
        },
        {
            path:'/service',
            component: ServiceComponent,
            name:'service'
        },
        {
            path:'/portfolio',
            component: PortfolioComponent,
            name:'portfolio'
        },
        {
            path:'/portfolio-details',
            component: PortfolioDetailsComponent,
            name:'portfolio-details'
        },
        {
            path:'/testimonial',
            component: TestimonialComponent,
            name:'testimonial'
        },
        {
            path:'/pricing',
            component: PricingComponent,
            name:'pricing'
        },
        {
            path:'/blog',
            component: BlogComponent,
            name:'blog'
        },
        {
            path:'/blog-single',
            component: BlogSingleComponent,
            name:'blog-single'
        },
        {
            path:'/contact',
            component: ContactComponent,
            name:'contact'
        },
        {
            path:'/example',
            component: ExampleComponent,
            name:'example'
        },
    ]
});
export default routes;