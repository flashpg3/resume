<template>
  <div class="app">
    <TopToolbar @clear="handleClear" @export-pdf="handleExportPdf" />
    <div class="main-content">
      <LeftPanel />
      <div class="divider"></div>
      <ResumePreview ref="previewRef" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopToolbar from './components/TopToolbar.vue'
import LeftPanel from './components/LeftPanel.vue'
import ResumePreview from './components/ResumePreview.vue'
import { useResumeData } from './composables/useResumeData.js'

const { clearAll } = useResumeData()
const previewRef = ref(null)

function handleClear() {
  if (confirm('确定要清空所有已填写的内容吗？此操作不可恢复。')) {
    clearAll()
  }
}

async function handleExportPdf() {
  if (previewRef.value) {
    await previewRef.value.exportPdf()
  }
}
</script>

<style scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  min-height: 0;
}

.divider {
  width: 1px;
  background: var(--color-border);
  flex-shrink: 0;
}
</style>
