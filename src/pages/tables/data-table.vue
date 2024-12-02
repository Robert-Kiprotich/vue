<script setup>
import * as demoCode from '@/views/demos/forms/tables/data-table/demoCodeDataTable'
</script>

<template>
  <VRow>
    

   

    <!-- 👉 Table Cell Slot  -->
    <VCol cols="12">
      <AppCardCode
        title="Cell Slot"
        :code="demoCode.cellSlot"
      >
        <DemoDataTableCellSlot />
      </AppCardCode>
    </VCol>

    <!-- 👉 Table Row selection  -->
   

    <!-- 👉 Fixed Header  -->
    

    <!-- 👉 Expandable rows -->
    
    <!-- 👉 Grouping Rows -->
    

    

   
    <!-- 👉 Kitchen Sink  -->
   
  </VRow>
</template>
