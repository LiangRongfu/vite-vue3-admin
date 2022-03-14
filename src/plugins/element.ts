import { App } from 'vue'
import {
  ElButton,
  ElMessage,
  ElNotification,
  ElMessageBox,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElRow,
  ElCol,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

export type Size = 'default' | 'medium' | 'small' | 'mini'

export default (app: App): void => {
  app.use(ElementPlus, {
    locale: zhCn
  })

  const components = [
    ElButton,
    ElMessage,
    ElNotification,
    ElMessageBox,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElRow,
    ElCol,
    ElBreadcrumb,
    ElBreadcrumbItem
  ]

  components.forEach(component => {
    app.use(component)
  })

  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt

  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}