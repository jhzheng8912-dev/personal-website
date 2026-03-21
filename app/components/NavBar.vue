<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5"
    style="background: rgba(10, 10, 10, 0.75);"
  >
    <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <span class="font-bold text-lg tracking-tight" style="color: #00d4ff;">
        JH<span class="text-white">.</span>
      </span>

      <!-- 桌面版選單 -->
      <ul class="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="hover:text-white transition-colors duration-200 relative group"
          >
            {{ item.label }}
            <span class="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style="background: #00d4ff;" />
          </a>
        </li>
      </ul>

      <!-- 手機版按鈕 -->
      <button
        class="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
        aria-label="開啟選單"
        @click="menuOpen = !menuOpen"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
          />
        </svg>
      </button>
    </div>

    <!-- 手機版展開 -->
    <Transition name="slide-down">
      <div
        v-if="menuOpen"
        class="md:hidden px-6 pb-5 flex flex-col gap-4 text-sm font-medium text-gray-400"
        style="background: rgba(10,10,10,0.95);"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="hover:text-white transition-colors py-1"
          @click="menuOpen = false"
        >{{ item.label }}</a>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

const navItems = [
  { label: '關於', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '作品', href: '#projects' },
  { label: '聯絡', href: '#contact' },
]
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
