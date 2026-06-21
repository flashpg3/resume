<template>
  <section class="form-section">
    <div class="section-header">
      <h2 class="section-title">校园经历</h2>
      <button class="btn-add" @click="addEntry('campus', { org: '', role: '', startDate: '', endDate: '', description: '' })">+ 添加</button>
    </div>
    <div
      v-for="item in data.campus"
      :key="item.id"
      class="entry-card"
    >
      <div class="field">
        <label class="label">组织/社团</label>
        <input class="input input-sm" type="text" v-model="item.org" placeholder="请输入组织或社团名称" />
      </div>
      <div class="field">
        <label class="label">角色</label>
        <input class="input input-sm" type="text" v-model="item.role" placeholder="请输入担任角色" />
      </div>
      <div class="field-row">
        <div class="field field-half">
          <label class="label">开始</label>
          <input class="input input-sm" type="text" v-model="item.startDate" placeholder="如 2024.09" />
        </div>
        <div class="field field-half">
          <label class="label">结束</label>
          <input class="input input-sm" type="text" v-model="item.endDate" placeholder="如 2025.06" />
        </div>
      </div>
      <div class="field">
        <label class="label">描述</label>
        <input class="input input-sm" type="text" v-model="item.description" placeholder="简要描述工作内容" />
      </div>
      <button class="btn-delete" @click="removeEntry('campus', item.id)">删除</button>
    </div>
  </section>
</template>

<script setup>
import { useResumeData } from '../composables/useResumeData.js'
const { data, addEntry, removeEntry } = useResumeData()
</script>

<style scoped>
.form-section { display: flex; flex-direction: column; gap: 12px; }
.section-header { display: flex; justify-content: space-between; align-items: center; }
.section-title { font-size: 16px; font-weight: 600; color: var(--color-text-primary); }
.btn-add {
  padding: 4px 12px; font-size: 12px; font-weight: 600;
  color: var(--color-white); background: var(--color-primary); border-radius: var(--radius-sm);
}
.entry-card {
  display: flex; flex-direction: column; gap: 8px;
  padding: 12px; background: var(--color-input-bg); border-radius: var(--radius-md);
}
.field { display: flex; flex-direction: column; gap: 4px; }
.label { font-size: 13px; font-weight: 500; color: var(--color-text-body); }
.field-row { display: flex; gap: 8px; }
.field-half { flex: 1; }
.input {
  padding: 0 12px; background: var(--color-input-bg);
  border: 1px solid var(--color-border); border-radius: var(--radius-sm);
  transition: border-color var(--transition);
}
.input:focus { border-color: var(--color-primary); }
.input-sm { height: 32px; background: var(--color-white); }
.btn-delete {
  width: fit-content; padding: 4px 8px;
  font-size: 12px; font-weight: 500;
  color: var(--color-delete-text); background: var(--color-delete-bg);
  border-radius: var(--radius-sm);
}
</style>
