<script setup>
import ApexChartAreaChart from '@/views/charts/apex-chart/ApexChartAreaChart.vue';
import ApexChartStocksPrices from '@/views/charts/apex-chart/ApexChartStocksPrices.vue'
</script>

<template>
  <VRow id="apex-chart-wrapper">
    <!-- 👉  Area chart -->
    <VCol cols="12">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Area Chart</VCardTitle>
          <VCardSubtitle>Commercial networks</VCardSubtitle>

          <template #append>
            <div class="date-picker-wrapper">
              <AppDateTimePicker
                model-value="2022-06-09"
                prepend-inner-icon="tabler-calendar"
                density="compact"
                :config="{ position: 'auto right' }"
              />
            </div>
          </template>
        </VCardItem>

        <VCardText>
          <ApexChartAreaChart />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.date-picker-wrapper {
  inline-size: 10.5rem;
}

#apex-chart-wrapper {
  .v-card-item__append {
    padding-inline-start: 0;
  }
}
</style>
