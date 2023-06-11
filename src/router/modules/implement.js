import Implement from "@/views/Implement/index.vue"
import Prev from "@/views/Implement/components/prev.vue"
import Intro from "@/views/Implement/components/intro.vue"
import Content from "@/views/Implement/components/content.vue"
const implement = {
    name: 'implement',
    path: '/implement',
    component: Implement,
    children: [
        {
            name: 'prev',
            path: '',
            component: Prev
        },
        {
            name: 'intro',
            path: 'intro',
            component: Intro
        },
        {
            name: 'content',
            path: 'content',
            component: Content,
            props({ query }) {
                return {
                    id: query.id
                }
            }
        }
    ]
}
export default implement