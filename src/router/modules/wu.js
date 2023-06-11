import Wu from "@/views/Wu/indexWu.vue"
import IntroWu from "@/views/Wu/components/introWu.vue"
import ContentWu from "@/views/Wu/components/contentWu.vue"
import PrevWu from "@/views/Wu/components/prevWu.vue"
const implement = {
    name: 'wu',
    path: '/wu',
    component: Wu,
    children:[
        {
            name: 'wu',
            path: '',
            component: PrevWu,
        },
        {
            name: 'introWu',
            path: 'introWu',
            component: IntroWu,
        },
        {
            name: 'contentWu',
            path: 'contentWu',
            component: ContentWu,

        }
    ]
}
export default implement;