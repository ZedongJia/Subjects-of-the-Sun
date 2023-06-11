import Ren from "@/views/Human/index.vue"
import PrevRen from "@/views/Human/components/prev.vue"
import IntroRen from "@/views/Human/components/intro.vue"
const ren = {
    name: 'ren',
    path: '/ren',
    component: Ren,
    children: [
        {
            name: 'prevRen',
            path: '',
            component: PrevRen
        },
        {
            name: 'introRen',
            path: 'introRen',
            component: IntroRen
        }
    ]
}
export default ren