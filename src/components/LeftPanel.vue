<template>
  <aside class="left-panel">
    <BasicInfo />
    <div class="section-divider"></div>
    <EducationSection />
    <div class="section-divider"></div>
    <ExperienceSection />
    <div class="section-divider"></div>
    <ProjectSection />
    <div class="section-divider"></div>
    <CampusSection />
    <div class="section-divider"></div>
    <SkillSection />
    <div class="section-divider"></div>
    <SelfEvaluation />
    <div class="empty-hint">
      <span class="hint-icon">📝</span>
      <span class="hint-text">从上方模块开始填写，右侧实时预览简历效果</span>
    </div>
  </aside>
</template>

<script setup>
import BasicInfo from './BasicInfo.vue'
import EducationSection from './EducationSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import ProjectSection from './ProjectSection.vue'
import CampusSection from './CampusSection.vue'
import SkillSection from './SkillSection.vue'
import SelfEvaluation from './SelfEvaluation.vue'
</script>

<style scoped>
.left-panel {
  width: 480px;
  flex-shrink: 0;
  background: var(--color-white);
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.section-divider {
  height: 1px;
  background: var(--color-border);
  margin: 20px 0;
}

.empty-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
  background: var(--color-input-bg);
  border-radius: var(--radius-md);
  margin-top: auto;
}

.hint-icon {
  font-size: 24px;
}

.hint-text {
  font-size: 12px;
  color: var(--color-text-muted);
}
</style>
