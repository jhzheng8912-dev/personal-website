<template>
  <section id="projects" class="py-24" style="background-color: #0a0a0a;">
    <div class="max-w-5xl mx-auto px-6">
      <SectionTitle title="作品集" subtitle="Projects" />
      <div class="mt-14 grid md:grid-cols-2 gap-6">

        <!-- 真實專案：餐廳網站模板 -->
        <article class="card-dark rounded-xl overflow-hidden group">
          <!-- 封面：預覽圖 -->
          <div class="h-36 relative overflow-hidden" style="background-color: #2c1810;">
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span class="text-2xl">🍽</span>
              <span class="text-sm font-medium tracking-wide" style="color: #d4a574;">餐廳網站模板</span>
            </div>
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="background: radial-gradient(ellipse at center, rgba(212,165,116,0.12) 0%, transparent 70%);"
            />
          </div>

          <div class="p-6">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold" style="color: #e6edf3;">餐廳網站模板</h3>
              <a
                href="https://restaurant-template-two-orpin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-mono px-2 py-0.5 rounded transition-colors duration-200"
                style="background: rgba(0,212,255,0.06); border: 1px solid rgba(0,212,255,0.2); color: #00d4ff;"
                onmouseover="this.style.background='rgba(0,212,255,0.12)'"
                onmouseout="this.style.background='rgba(0,212,255,0.06)'"
              >
                Live Demo ↗
              </a>
            </div>
            <p class="text-sm leading-relaxed mb-4" style="color: #94a3b8;">
              適合中高價位餐廳的完整網站模板，含菜單展示、線上訂位、Google Maps 整合，支援 RWD 與 SEO 優化。
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in ['Nuxt 3', 'Tailwind CSS', 'Formspree']"
                :key="tag"
                class="text-xs font-mono px-2 py-0.5 rounded"
                style="background: rgba(0,212,255,0.05); border: 1px solid rgba(0,212,255,0.12); color: #8b949e;"
              >{{ tag }}</span>
            </div>
          </div>
        </article>

        <!-- 即將推出 -->
        <article class="card-dark rounded-xl overflow-hidden group">
          <!-- 封面 -->
          <div
            class="h-36 flex items-center justify-center relative overflow-hidden"
            style="background: linear-gradient(135deg, #0d0d0d, #111827);"
          >
            <div class="flex flex-col items-center gap-2">
              <div class="w-8 h-8 rounded border flex items-center justify-center"
                   style="border-color: rgba(0,212,255,0.2);">
                <svg aria-hidden="true" class="w-4 h-4" style="color: rgba(0,212,255,0.3);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="background: radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, transparent 70%);"
            />
          </div>

          <div class="p-6">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold" style="color: #8b949e;">即將推出</h3>
              <span class="text-xs font-mono px-2 py-0.5 rounded"
                    style="background: rgba(0,212,255,0.06); border: 1px solid rgba(0,212,255,0.15); color: #00d4ff;">
                Coming Soon
              </span>
            </div>
            <p class="text-sm leading-relaxed mb-4" style="color: #94a3b8;">
              專案內容規劃中，敬請期待。
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="i in 3"
                :key="i"
                class="h-5 rounded"
                :style="`width: ${[48, 56, 40][i-1]}px; background: #1a1a1a;`"
              />
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>
