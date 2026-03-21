<template>
  <section id="about" class="py-24" style="background-color: #0a0a0a;">
    <div class="max-w-5xl mx-auto px-6">
      <SectionTitle title="關於我" subtitle="About" />
      <div class="mt-14 grid md:grid-cols-2 gap-14 items-start">
        <!-- 自我介紹 -->
        <div class="space-y-4 leading-relaxed" style="color: #888888;">
          <p>
            我是一位擁有 3 年經驗的全端工程師，熟悉 Nuxt/Vue.js 前端開發、
            Python 後端架構，以及 GCP/GKE 雲端部署與維運。
          </p>
          <p>
            喜歡用技術解決實際問題，目前積極探索 AI 工具整合與獨立產品開發。
          </p>
        </div>

        <!-- 工作經歷 -->
        <div>
          <p class="text-xs font-semibold tracking-widest uppercase mb-5" style="color: #00d4ff;">Experience</p>
          <div class="relative pl-4 border-l" style="border-color: #1a1a1a;">
            <div class="absolute -left-1 top-1.5 w-2 h-2 rounded-full" style="background: #00d4ff;" />
            <p class="text-white font-medium text-sm">Software Engineer</p>
            <p class="text-xs font-mono mt-0.5" style="color: #444444;">2022 – 現在</p>
            <p class="text-sm mt-2 leading-relaxed" style="color: #666666;">
              負責前後端全端開發，包含 Nuxt/Vue 前端、Python 後端 API，
              以及 GCP/GKE 雲端部署維運。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
