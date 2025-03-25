import { useServiceStore } from '@/stores/service'
export default [
    {
        path: '/',
        name: 'PHome',
        meta: { title: 'Home', layout: 'mainPage' },
        component: () => import('@/pages/Index/PIndex.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        meta: { title: 'Error', layout: 'empty' },
        component: () => import('@/layouts/LEmpty.vue'),
    },
    {
        path: '/about',
        name: 'PCompany',
        meta: { title: 'Company', layout: 'default' },
        component: () => import('@/pages/company/company-index.vue'),
    },
    {
        path: '/company',
        name: 'Company',
        meta: { title: 'Company', layout: 'default' },
        component: () => import('@/pages/company/company-index.vue'),
    },
    {
        path: '/products',
        name: 'Products',
        meta: { title: 'Products', layout: 'default' },
        component: () => import('@/pages/products/ProductCategoryList.vue'),
    },
    {
        path: '/products/:id',
        meta: { title: 'Products', layout: 'default' },
        component: () => import('@/pages/products/ProductItem.vue'),
        children: [
            {
                path: ':slug',
                name: 'single',
                component: () =>  import('@/pages/products/ProductItemSingle.vue'),
            },
        ],
    },
    {
        path: '/services',
        name: 'Service',
        meta: { title: 'Service', layout: 'default' },
        component: () => import('@/pages/services/Services.vue'),
    },
    {
        path: '/services/:slug',
        name: 'ServiceSingle',
        meta: { title: 'Service', layout: 'default' },
        component: () => import('@/pages/services/ServiceItem.vue'),
        beforeEnter: async () => {
            const store = useServiceStore()
            await store.getAllServiceTitle()
        },
    },
    {
        path: '/gallery/:slug',
        meta: { layout: 'default' },
        component: () => import('@/pages/photo-gallery/gallery-slug.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: { title: 'Contact', layout: 'default' },
        component: () => import('@/pages/contact/Contact.vue'),
    },
    // {
    //     path: '/vacancy',
    //     name: 'PVacancy',
    //     meta: { title: 'Vacancy', layout: 'default' },
    //     component: () => import('@/pages/vacancy/PIndex.vue'),
    //     children: [
    //         {
    //             path: '/vacancy',
    //             name: 'PVacancy-Index',
    //             meta: { title: 'Vacancy', layout: 'default' },
    //             component: () => import('@/pages/vacancy/PVacancy.vue'),
    //         },
    //         {
    //             path: '/vacancy/:slug',
    //             name: 'PVacancyId',
    //             meta: { layout: 'default' },
    //             component: () => import('@/pages/vacancy/slug/PCSVacancy.vue'),
    //         },
    //     ],
    // },
]
