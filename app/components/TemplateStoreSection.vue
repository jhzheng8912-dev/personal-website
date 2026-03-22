<template>
  <section id="templates" class="py-24" style="background-color: #0d1117;">
    <div class="max-w-5xl mx-auto px-6">
      <SectionTitle title="模板商店" subtitle="Templates" />
      <p class="mt-4 text-sm text-center" style="color: #8b949e;">
        可直接購買使用的網站模板，附完整程式碼與安裝說明
      </p>

      <div class="mt-14 grid md:grid-cols-2 gap-6">

        <!-- 餐廳網站模板 -->
        <article class="card-dark rounded-xl overflow-hidden group">
          <!-- 封面 -->
          <div class="h-36 relative overflow-hidden" style="background-color: #2c1810;">
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span class="text-2xl">🍽</span>
              <span class="text-sm font-medium tracking-wide" style="color: #d4a574;">餐廳網站模板</span>
            </div>
            <!-- 價格標籤 -->
            <div class="absolute top-3 right-3">
              <span
                class="text-sm font-bold font-mono px-2.5 py-1 rounded"
                style="background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: #00d4ff;"
              >$15</span>
            </div>
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="background: radial-gradient(ellipse at center, rgba(212,165,116,0.12) 0%, transparent 70%);"
            />
          </div>

          <div class="p-6">
            <h3 class="font-semibold mb-2" style="color: #e6edf3;">餐廳網站模板</h3>
            <p class="text-sm leading-relaxed mb-4" style="color: #94a3b8;">
              Nuxt 3 + Tailwind CSS，含菜單展示、線上訂位、Google Maps 整合，RWD + SEO 完整支援。
            </p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tag in ['Nuxt 3', 'Tailwind CSS', 'Formspree']"
                :key="tag"
                class="text-xs font-mono px-2 py-0.5 rounded"
                style="background: rgba(0,212,255,0.05); border: 1px solid rgba(0,212,255,0.12); color: #8b949e;"
              >{{ tag }}</span>
            </div>
            <div class="flex gap-3">
              <a
                href="https://restaurant-template-two-orpin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 text-center text-xs font-mono px-3 py-2 rounded transition-colors duration-200"
                style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: #8b949e;"
                onmouseover="this.style.background='rgba(255,255,255,0.08)'"
                onmouseout="this.style.background='rgba(255,255,255,0.04)'"
              >
                查看 Demo ↗
              </a>
              <a
                href="https://zhengster06.gumroad.com/l/ashgbl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 text-center text-xs font-mono px-3 py-2 rounded transition-all duration-200 font-semibold"
                style="background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.4); color: #00d4ff; box-shadow: 0 0 12px rgba(0,212,255,0.15);"
                onmouseover="this.style.background='rgba(0,212,255,0.18)'; this.style.boxShadow='0 0 20px rgba(0,212,255,0.3)'"
                onmouseout="this.style.background='rgba(0,212,255,0.1)'; this.style.boxShadow='0 0 12px rgba(0,212,255,0.15)'"
              >
                立即購買
              </a>
            </div>
          </div>
        </article>

        <!-- 即將推出 -->
        <article class="card-dark rounded-xl overflow-hidden group">
          <div
            class="h-36 flex items-center justify-center relative overflow-hidden"
            style="background: linear-gradient(135deg, #0d0d0d, #111827);"
          >
            <div class="w-8 h-8 rounded border flex items-center justify-center"
                 style="border-color: rgba(0,212,255,0.2);">
              <svg class="w-4 h-4" style="color: rgba(0,212,255,0.3);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4" />
              </svg>
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
              更多模板規劃中，敬請期待。
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
