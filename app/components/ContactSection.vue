<template>
  <section id="contact" class="py-24 grid-bg" style="background-color: #0d0d0d;">
    <div class="max-w-5xl mx-auto px-6">
      <SectionTitle title="聯絡我" subtitle="Contact" />
      <div class="mt-14 grid md:grid-cols-2 gap-14">
        <!-- 左側 -->
        <div class="space-y-5">
          <p class="leading-relaxed" style="color: #666666;">
            如果您有合作提案、工作機會，或只是想打個招呼，都歡迎透過以下方式聯絡我。
          </p>
          <div class="space-y-3 pt-2">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 group transition-colors"
              style="color: #555555;"
            >
              <span class="text-base w-5 text-center">{{ link.icon }}</span>
              <span
                class="text-sm font-mono group-hover:underline"
                style="color: inherit;"
                onmouseover="this.parentElement.style.color='#00d4ff'"
                onmouseout="this.parentElement.style.color='#555555'"
              >{{ link.label }}</span>
            </a>
          </div>
        </div>

        <!-- 右側表單：Formspree -->
        <form
          v-if="!submitted"
          action="https://formspree.io/f/mvzwnpya"
          method="POST"
          class="space-y-4"
          @submit.prevent="handleSubmit"
        >
          <div>
            <label class="block text-xs font-medium mb-1.5 tracking-wide" style="color: #555555;">姓名</label>
            <input
              name="name"
              type="text"
              placeholder="您的名字"
              required
              class="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
              style="background: #111111; border: 1px solid #222222;"
              onfocus="this.style.borderColor='rgba(0,212,255,0.4)'; this.style.boxShadow='0 0 0 3px rgba(0,212,255,0.05)'"
              onblur="this.style.borderColor='#222222'; this.style.boxShadow='none'"
            />
          </div>
          <div>
            <label class="block text-xs font-medium mb-1.5 tracking-wide" style="color: #555555;">Email</label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              class="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
              style="background: #111111; border: 1px solid #222222;"
              onfocus="this.style.borderColor='rgba(0,212,255,0.4)'; this.style.boxShadow='0 0 0 3px rgba(0,212,255,0.05)'"
              onblur="this.style.borderColor='#222222'; this.style.boxShadow='none'"
            />
          </div>
          <div>
            <label class="block text-xs font-medium mb-1.5 tracking-wide" style="color: #555555;">訊息</label>
            <textarea
              name="message"
              rows="4"
              placeholder="您想說的話..."
              required
              class="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
              style="background: #111111; border: 1px solid #222222;"
              onfocus="this.style.borderColor='rgba(0,212,255,0.4)'; this.style.boxShadow='0 0 0 3px rgba(0,212,255,0.05)'"
              onblur="this.style.borderColor='#222222'; this.style.boxShadow='none'"
            />
          </div>
          <button
            type="submit"
            :disabled="sending"
            class="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-50"
            style="background: transparent; border: 1px solid #00d4ff; color: #00d4ff;"
            onmouseover="if(!this.disabled){ this.style.background='#00d4ff'; this.style.color='#0a0a0a'; this.style.boxShadow='0 0 20px rgba(0,212,255,0.4)' }"
            onmouseout="this.style.background='transparent'; this.style.color='#00d4ff'; this.style.boxShadow='none'"
          >
            {{ sending ? '送出中…' : '送出訊息' }}
          </button>
          <p v-if="error" class="text-xs text-center text-red-400">{{ error }}</p>
        </form>

        <!-- 送出成功 -->
        <div v-else class="flex flex-col items-center justify-center gap-3 py-12">
          <span class="text-2xl" style="color: #00d4ff;">✓</span>
          <p class="text-sm" style="color: #888888;">訊息已送出，我會盡快回覆！</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const submitted = ref(false)
const sending = ref(false)
const error = ref('')

const socialLinks = [
  { icon: '✉', label: 'jhzheng8912@gmail.com', href: 'mailto:jhzheng8912@gmail.com' },
  { icon: '◎', label: 'github.com/jhzheng8912-dev', href: 'https://github.com/jhzheng8912-dev' },
  { icon: '◈', label: 'linkedin.com/in/junhong-zheng', href: 'https://linkedin.com/in/junhong-zheng' },
]

async function handleSubmit(e: Event) {
  const form = e.target as HTMLFormElement
  sending.value = true
  error.value = ''
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      submitted.value = true
    } else {
      error.value = '送出失敗，請稍後再試。'
    }
  } catch {
    error.value = '網路錯誤，請稍後再試。'
  } finally {
    sending.value = false
  }
}
</script>
