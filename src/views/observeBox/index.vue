<template>
    <div 
      v-ob-size="handelChange"
      style="background-color: pink;"
      :style="{ width: `${boxSize.w}px`, height: `${boxSize.h}px` }"
    >
        boxSize: 
        <br>
        width: {{ observeResult.w }}
        <br>
        height: {{ observeResult.h }}
    </div>
</template>

<script setup lang="ts">
import observeSize from '@/directive/observeSize';

const vObSize = { ...observeSize }

const boxSize = reactive({
  w: ~~(Math.random() * 800),
  h: ~~(Math.random() * 800)
})


const observeResult = reactive({
  w: '',
  h: ''
})
interface ObSize {
  width: string,
  height: string
}
const handelChange = (size: ObSize) => {
    observeResult.w = size.width;
    observeResult.h = size.height;
}
</script>