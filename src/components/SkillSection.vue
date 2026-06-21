<template>
  <section class="form-section">
    <h2 class="section-title">专业技能</h2>
    <div class="skill-input-area">
      <div class="skill-tags">
        <span
          v-for="skill in data.skills"
          :key="skill"
          class="skill-tag"
          @click="removeSkill(skill)"
        >
          {{ skill }}
          <span class="remove-icon">&times;</span>
        </span>
      </div>
      <div class="input-wrap">
        <input
          class="input input-sm"
          type="text"
          v-model="newSkill"
          placeholder="输入技能后按回车添加"
          @keydown.enter="handleAdd"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useResumeData } from '../composables/useResumeData.js'
const { data, addSkill, removeSkill } = useResumeData()
const newSkill = ref('')

function handleAdd() {
  const val = newSkill.value.trim()
  if (addSkill(val)) newSkill.value = ''
}
</script>

<style scoped>
.form-section { display: flex; flex-direction: column; gap: 12px; }
.section-title { font-size: 16px; font-weight: 600; color: var(--color-text-primary); }

.skill-input-area {
  display: flex; flex-direction: column; gap: 8px;
}

.skill-tags {
  display: flex; flex-wrap: wrap; gap: 8px;
}

.skill-tag {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 6px 10px;
  font-size: 12px; font-weight: 500; color: var(--color-primary);
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
  cursor: pointer;
  user-select: none;
  transition: background var(--transition);
}

.skill-tag:hover { background: #dbeafe; }

.remove-icon {
  font-size: 14px; line-height: 1; opacity: 0.6;
}

.input-wrap {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-input-bg);
}

.input {
  padding: 0 12px;
  border: none;
  background: transparent;
  width: 100%;
}
.input:focus { outline: none; }
.input-sm { height: 32px; }
</style>
