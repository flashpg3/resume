<template>
  <div class="preview-panel">
    <p class="preview-label">实时预览 · 所见即所得</p>
    <div class="a4-page" ref="a4Ref" id="resume-preview">
      <!-- Header -->
      <div class="resume-header">
        <h1 class="resume-name">{{ data.basic.name || '姓名' }}</h1>
        <div class="resume-contact">
          <span v-if="data.basic.age">{{ data.basic.age }}岁</span>
          <span v-if="data.basic.phone">{{ data.basic.phone }}</span>
          <span v-if="data.basic.email">{{ data.basic.email }}</span>
          <span v-if="data.basic.hometown">{{ data.basic.hometown }}</span>
        </div>
      </div>

      <div class="section-line"></div>

      <!-- 教育背景 -->
      <div v-if="data.education.length" class="preview-section">
        <h3 class="preview-section-title">教育背景</h3>
        <div v-for="item in data.education" :key="item.id" class="preview-item">
          <div class="preview-item-header">
            <span class="preview-item-left">
              <span class="preview-item-primary">{{ item.school || '学校' }}</span>
              <span v-if="item.major" class="preview-item-secondary"> · {{ item.major }}</span>
            </span>
            <span class="preview-item-date" v-if="item.startDate">{{ item.startDate }} - {{ item.endDate }}</span>
          </div>
        </div>
      </div>

      <div v-if="data.experience.length" class="section-line"></div>

      <!-- 工作经历 -->
      <div v-if="data.experience.length" class="preview-section">
        <h3 class="preview-section-title">工作经历</h3>
        <div v-for="item in data.experience" :key="item.id" class="preview-item">
          <div class="preview-item-header">
            <span class="preview-item-primary">{{ item.company || '公司' }} · {{ item.position || '职位' }}</span>
            <span class="preview-item-date" v-if="item.startDate">{{ item.startDate }} - {{ item.endDate }}</span>
          </div>
          <p v-if="item.description" class="preview-item-desc">{{ item.description }}</p>
        </div>
      </div>

      <div v-if="data.projects.length" class="section-line"></div>

      <!-- 项目经验 -->
      <div v-if="data.projects.length" class="preview-section">
        <h3 class="preview-section-title">项目经验</h3>
        <div v-for="item in data.projects" :key="item.id" class="preview-item">
          <div class="preview-item-header">
            <span class="preview-item-primary">{{ item.name || '项目名' }}</span>
            <span class="preview-item-date" v-if="item.startDate">{{ item.startDate }} - {{ item.endDate }}</span>
          </div>
          <p v-if="item.description" class="preview-item-desc">{{ item.description }}</p>
        </div>
      </div>

      <div v-if="data.campus.length" class="section-line"></div>

      <!-- 校园经历 -->
      <div v-if="data.campus.length" class="preview-section">
        <h3 class="preview-section-title">校园经历</h3>
        <div v-for="item in data.campus" :key="item.id" class="preview-item">
          <div class="preview-item-header">
            <span class="preview-item-primary">{{ item.org || '组织' }} · {{ item.role || '角色' }}</span>
            <span class="preview-item-date" v-if="item.startDate">{{ item.startDate }} - {{ item.endDate }}</span>
          </div>
          <p v-if="item.description" class="preview-item-desc">{{ item.description }}</p>
        </div>
      </div>

      <div v-if="data.skills.length" class="section-line"></div>

      <!-- 专业技能 -->
      <div v-if="data.skills.length" class="preview-section">
        <h3 class="preview-section-title">专业技能</h3>
        <p class="preview-item-desc">{{ data.skills.join(' / ') }}</p>
      </div>

      <div v-if="data.selfEvaluation" class="section-line"></div>

      <!-- 自我评价 -->
      <div v-if="data.selfEvaluation" class="preview-section">
        <h3 class="preview-section-title">自我评价</h3>
        <p class="preview-item-desc">{{ data.selfEvaluation }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useResumeData } from '../composables/useResumeData.js'

const { data } = useResumeData()
const a4Ref = ref(null)

async function exportPdf() {
  const { default: html2pdf } = await import('html2pdf.js')
  const element = a4Ref.value
  if (!element) return

  const opt = {
    margin: [0, 0, 0, 0],
    filename: `${data.basic.name || '简历'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  }

  await html2pdf().set(opt).from(element).save()
}

defineExpose({ exportPdf })
</script>

<style scoped>
.preview-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  background: var(--color-preview-bg);
  overflow-y: auto;
  gap: 16px;
}

.preview-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-muted);
  width: 100%;
  max-width: 595px;
}

.a4-page {
  width: 595px;
  min-height: 842px;
  background: var(--color-white);
  border-radius: 2px;
  box-shadow: var(--shadow-preview);
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
}

/* Header */
.resume-header { text-align: left; }

.resume-name {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text-heading);
  margin-bottom: 8px;
}

.resume-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.resume-contact span {
  font-size: 11px;
  color: var(--color-text-secondary);
}

/* Sections */
.section-line {
  height: 1px;
  background: var(--color-border-light);
}

.preview-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.preview-section-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-heading);
}

.preview-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.preview-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.preview-item-primary {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-body);
}

.preview-item-secondary {
  font-size: 11px;
  color: var(--color-text-secondary);
}

.preview-item-left {
  display: flex;
  align-items: baseline;
}

.preview-item-date {
  font-size: 11px;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.preview-item-desc {
  font-size: 11px;
  color: var(--color-text-description);
  line-height: 1.6;
}
</style>
