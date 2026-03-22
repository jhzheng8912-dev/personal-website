<template>
  <section id="skills" class="py-24 grid-bg" style="background-color: #0d0d0d;">
    <div class="max-w-5xl mx-auto px-6">
      <SectionTitle title="技術能力" subtitle="Skills" />
      <div class="mt-14 grid md:grid-cols-3 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="card-dark rounded-xl p-6"
        >
          <div class="flex items-center gap-3 mb-5">
            <span class="text-xl">{{ category.icon }}</span>
            <h3 class="font-semibold text-white text-sm tracking-wide">{{ category.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1 text-xs rounded font-mono"
              style="background: rgba(0,212,255,0.07); border: 1px solid rgba(0,212,255,0.15); color: #00d4ff;"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkillCategory {
  icon: string
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: '⬡',
    title: 'Frontend',
    skills: ['Nuxt 3', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: '◈',
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
  },
  {
    icon: '◻',
    title: 'Cloud & Tools',
    skills: ['GCP', 'GKE', 'Docker', 'GitHub Actions', 'Linux'],
  },
]
</script>
