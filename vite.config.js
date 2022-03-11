import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VitePages from "vite-plugin-pages";
import fs from "fs-extra";
//gray-matter 的功能，可以获取相关文件中的 front-matter，并将其处理为一个对象
import matter from "gray-matter";
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__'
    }),
    VitePages({
      extensions: ['vue', 'md'],
      pagesDir: 'src/views',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const {data} = matter(md)
        route.meta = Object.assign(route.meta || {}, {frontmatter: data})
        return route;
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
