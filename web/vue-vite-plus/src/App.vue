<script setup lang="ts">
import { onMounted, ref } from "vue";
import { setupCounter } from "./counter";

const counterBtn = ref<HTMLButtonElement>();

onMounted(() => {
  if (counterBtn.value) {
    setupCounter(counterBtn.value);
  }
});

const features = [
  {
    icon: "⚡",
    title: "Instant HMR",
    description:
      "Lightning-fast Hot Module Replacement so you can iterate at the speed of thought.",
  },
  {
    icon: "🚀",
    title: "Optimized Build",
    description: "Powered by Rolldown for production builds that are fast and lean out of the box.",
  },
  {
    icon: "💡",
    title: "Type Safe",
    description: "End-to-end TypeScript support with type-aware linting baked into every save.",
  },
];
</script>

<template>
  <el-config-provider>
    <el-container style="min-height: 100vh; background: transparent">
      <el-header
        style="
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 64px;
          border-bottom: 1px solid var(--el-border-color-light);
        "
      >
        <el-tag type="primary" size="large" round> vue-vite-plus </el-tag>
        <el-space>
          <el-button text tag="a" href="https://github.com/vitejs/vite" target="_blank">
            GitHub
          </el-button>
          <el-button text tag="a" href="https://x.com/vite_js" target="_blank"> X.com </el-button>
          <el-button text tag="a" href="https://vite.dev/" target="_blank"> Docs </el-button>
        </el-space>
      </el-header>

      <el-main style="padding: 80px 48px; max-width: 960px; margin: 0 auto; width: 100%">
        <div style="text-align: center; margin-bottom: 64px">
          <el-tag type="primary" round style="margin-bottom: 16px">
            Vite + Vue + Element Plus
          </el-tag>
          <h1 style="font-size: 56px; margin-bottom: 16px; letter-spacing: -1px; line-height: 1.15">
            Build Fast.
            <br />
            Ship Faster.
          </h1>
          <p
            style="
              font-size: 18px;
              color: var(--el-text-color-secondary);
              max-width: 560px;
              margin: 0 auto 32px;
            "
          >
            A modern Vue starter powered by Vite+, TypeScript, and Element Plus. Edit
            <el-text tag="code" type="primary">src/App.vue</el-text> and see your changes instantly.
          </p>
          <el-space size="default">
            <el-button ref="counterBtn" id="counter" type="primary" size="large" />
            <el-button size="large" tag="a" href="https://element-plus.org" target="_blank">
              Element Plus Docs
            </el-button>
          </el-space>
        </div>

        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          "
        >
          <el-card v-for="f in features" :key="f.title" shadow="hover" style="border-radius: 12px">
            <el-space direction="vertical" :size="'small'">
              <el-text style="font-size: 28px">{{ f.icon }}</el-text>
              <h4 style="margin: 0; font-size: 18px">{{ f.title }}</h4>
              <el-text type="info">{{ f.description }}</el-text>
            </el-space>
          </el-card>
        </div>
      </el-main>

      <el-divider style="margin: 0" />
      <el-footer style="text-align: center; background: transparent; padding: 24px 48px">
        <el-text type="info"> Built with Vite+ &amp; Element Plus · Ready for production </el-text>
      </el-footer>
    </el-container>
  </el-config-provider>
</template>
