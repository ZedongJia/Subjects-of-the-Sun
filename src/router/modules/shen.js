import Shen from "@/views/Shen/index.vue"
import PrevShen from "@/views/Shen/components/shenprev.vue"
import IntroShen from "@/views/Shen/components/shenintro.vue"
const implement = {
    name: 'shen',
    path: '/shen',
    component: Shen,
    children: [
        {
            name: 'prevShen',
            path: '',
            component: PrevShen
        },
        {
            name: 'introShen',
            path: 'introShen',
            component: IntroShen
        }
    ]
}
export default implement