import { DirectiveBinding } from 'vue'
const map = new WeakMap()
const ob = new ResizeObserver(entries => {
    for (const entry of entries) {
        const handler = map.get(entry.target)
        if (!handler) return;
        const box = entry.borderBoxSize[0];
        handler({
            width: box.inlineSize,
            height: box.blockSize
        })
    }
})

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        // 监视尺寸变化
        ob.observe(el)
        map.set(el, binding.value)
    },
    unmounted(el: HTMLElement) {
        // 取消监听
        ob.unobserve(el)
    }
}