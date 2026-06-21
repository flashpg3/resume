<template>
  <section class="form-section">
    <h2 class="section-title">基本信息</h2>
    <div class="fields">
      <div class="field">
        <label class="label">姓名</label>
        <input
          class="input"
          type="text"
          v-model="data.basic.name"
          placeholder="请输入姓名"
        />
      </div>
      <div class="field">
        <label class="label">电话</label>
        <input
          class="input"
          type="text"
          v-model="data.basic.phone"
          placeholder="请输入电话"
        />
      </div>
      <div class="field">
        <label class="label">邮箱</label>
        <input
          class="input"
          type="text"
          v-model="data.basic.email"
          placeholder="请输入邮箱"
        />
      </div>
      <div class="field">
        <label class="label">年龄</label>
        <input
          class="input"
          type="text"
          v-model="data.basic.age"
          placeholder="请输入年龄"
        />
      </div>
      <div class="field">
        <label class="label">籍贯</label>
        <input
          class="input"
          type="text"
          v-model="data.basic.hometown"
          placeholder="请输入籍贯"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useResumeData } from '../composables/useResumeData.js'
const { data } = useResumeData()
</script>

<style scoped>
.form-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-body);
}

.input {
  height: 36px;
  padding: 0 12px;
  background: var(--color-input-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--transition);
}

.input:focus {
  border-color: var(--color-primary);
}
</style>
