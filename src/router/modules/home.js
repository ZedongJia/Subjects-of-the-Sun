import Home from "@/views/Home/index.vue"
import Story from "@/views/Home/components/story.vue"
import Cause from "@/views/Home/components/cause.vue"

const home = {
  name: 'home',
  path: '/home',
  component: Home,
  children: [
    {
      name: 'story',
      path: '',
      component: Story
    },
    {
      name: 'cause',
      path: 'cause',
      component: Cause
    }
  ]
}
export default home;