import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

// 使用require.context 加载./svg目录下所有svg文件
const req = import.meta.globEager('./svg/*')
console.log(req)
// 导入./svg/下所有.svg文件
const requireAll = (requireContext: Record<string, {[key: string]: any;}>) => Object.keys(requireContext).map(a => console.log("a", a))
requireAll(req)

export default (app: App) => {
  // 全局注册svg-icon组件
  app.component('svg-icon', SvgIcon)
}
