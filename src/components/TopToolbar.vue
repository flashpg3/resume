<template>
  <header class="toolbar">
    <h1 class="logo">简历助手</h1>
    <div class="actions">
      <button class="btn btn-clear" @click="$emit('clear')">清空</button>
      <button class="btn btn-export" @click="$emit('export-pdf')">导出 PDF</button>
    </div>
  </header>
</template>

<script setup>
defineEmits(['clear', 'export-pdf'])
</script>

<style scoped>
.toolbar {
  height: 64px;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-primary);
}

.actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.btn {
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
}

.btn-clear {
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  background: var(--color-white);
}

.btn-export {
  padding: 8px 20px;
  color: var(--color-white);
  background: var(--color-export-btn);
  font-weight: 600;
}
</style>
