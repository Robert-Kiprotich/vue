<script setup>
import { avatarText } from '@/@core/utils/formatters';
import data from '@/views/demos/forms/tables/data-table/datatable';
import { VDataTable } from 'vuetify/labs/VDataTable';

const headers = [
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Text',
    key: 'text',
  },
  {
    title: 'From',
    key: 'from',
  },
  {
    title: 'To',
    key: 'to',
  },
  {
    title: 'Cost',
    key: 'cost',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Sent',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Success',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'User on Blacklist',
    }
  else
    return {
      color: 'info',
      text: 'pending',
    }
}
</script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        density="comfortable"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
