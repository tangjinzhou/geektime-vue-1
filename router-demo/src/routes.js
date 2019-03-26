import RouterDemo from './components/RouterDemo'
import RouterChildrenDemo from './components/RouterChildrenDemo'

const routes = [
  { path: '/foo', component: RouterDemo, name: '1' },
  { path: '/bar', component: RouterDemo, name: '2' },
  // 当 /user/:id 匹配成功，
  // RouterDemo 会被渲染在 App 的 <router-view /> 中
  { path: '/user/:id', 
    component: RouterDemo, 
    name: '3',
    props: true,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
        path: 'profile',
        component: RouterChildrenDemo,
        name: '3-1'
      },
      {
        // 当 /user/:id/posts 匹配成功
        // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
        path: 'posts',
        component: RouterChildrenDemo
      }
    ]
  },
  { path: '/a', redirect: '/bar' },
  { path: '*', component: RouterDemo, name: '404' }
]

export default routes