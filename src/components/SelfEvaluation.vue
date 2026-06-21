<template>
  <section class="form-section">
    <h2 class="section-title">自我评价</h2>
    <p class="hint">简要介绍自己、职业目标和优势特长</p>
    <textarea
      class="textarea"
      v-model="data.selfEvaluation"
      placeholder="例如：积极主动、善于团队协作的大四应届生..."
      rows="5"
    ></textarea>
  </section>
</template>

<script setup>
import { useResumeData } from '../composables/useResumeData.js'
const { data } = useResumeData()
</script>

<style scoped>
.form-section { display: flex; flex-direction: column; gap: 12px; }
.section-title { font-size: 16px; font-weight: 600; color: var(--color-text-primary); }

.hint {
  font-size: 12px; color: var(--color-text-muted);
}

.textarea {
  height: 120px;
  padding: 12px;
  background: var(--color-input-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 12px;
  color: var(--color-text-body);
  resize: vertical;
  transition: border-color var(--transition);
}
.textarea:focus { border-color: var(--color-primary); }
.textarea::placeholder { color: var(--color-text-muted); }
</style>
