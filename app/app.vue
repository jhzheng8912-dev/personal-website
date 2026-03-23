<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TemplateStoreSection />
      <ContactSection />
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: '鄭鈞紘',
        jobTitle: 'Full Stack Developer',
        url: 'https://jhzheng-dev.vercel.app',
        email: 'jhzheng8912@gmail.com',
        sameAs: [
          'https://github.com/jhzheng8912-dev',
          'https://linkedin.com/in/junhong-zheng',
        ],
      }),
    },
  ],
})
</script>
