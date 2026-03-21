<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg"
    style="background-color: #0a0a0a;"
  >
    <!-- 電藍色光暈背景 -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 70%);"
    />

    <div class="relative w-full max-w-5xl px-6 md:px-16 py-24 flex flex-col md:flex-row items-center gap-12">
      <!-- 頭像 -->
      <div class="flex-shrink-0">
        <div
          class="w-36 h-36 rounded-full flex items-center justify-center text-4xl font-bold text-white"
          style="background: #1a1a2e; border: 1.5px solid rgba(0,212,255,0.6); box-shadow: 0 0 20px rgba(0,212,255,0.25), inset 0 0 20px rgba(0,212,255,0.05);"
        >
          JH
        </div>
      </div>

      <!-- 文字 -->
      <div class="text-center md:text-left">
        <p class="text-sm font-semibold tracking-widest uppercase mb-3" style="color: #00d4ff;">
          Hello, I'm
        </p>

        <!-- 打字機大標題 -->
        <div class="overflow-hidden mb-4">
          <h1
            ref="titleEl"
            class="text-4xl md:text-5xl font-bold text-white leading-tight typewriter"
            style="max-width: max-content;"
          >
            鄭鈞紘
          </h1>
        </div>

        <p class="text-lg mb-6" style="color: #888888;">
          Full Stack Developer
        </p>
        <p class="max-w-md mb-10 leading-relaxed" style="color: #666666;">
          3 年全端開發經驗，專注於 Nuxt/Vue 前端、Python 後端與 GCP 雲端部署
        </p>

        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            class="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            style="background: transparent; border: 1px solid #00d4ff; color: #00d4ff;"
            onmouseover="this.style.background='#00d4ff'; this.style.color='#0a0a0a'; this.style.boxShadow='0 0 20px rgba(0,212,255,0.4)'"
            onmouseout="this.style.background='transparent'; this.style.color='#00d4ff'; this.style.boxShadow='none'"
          >
            查看作品
          </a>
          <a href="#contact" class="btn-outline px-6 py-3 rounded-lg font-semibold text-sm">
            聯絡我
          </a>
        </div>

        <!-- 技術標籤列 -->
        <div class="flex flex-wrap gap-2 mt-10 justify-center md:justify-start">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-3 py-1 text-xs rounded-full font-mono"
            style="background: rgba(0,212,255,0.06); border: 1px solid rgba(0,212,255,0.15); color: #00d4ff;"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- 向下捲動提示 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
      <span class="text-xs tracking-widest" style="color: #444444;">SCROLL</span>
      <svg class="w-4 h-4" style="color: #00d4ff;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const techStack = ['Nuxt 3', 'Vue.js', 'TypeScript', 'Python', 'FastAPI', 'GCP', 'GKE', 'Docker']
</script>
