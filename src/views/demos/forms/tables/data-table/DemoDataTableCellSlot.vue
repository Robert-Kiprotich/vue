<script setup>
import { onMounted, ref } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';
import axiosInstance from '../../../../../axiosInstance';

// Table headers
const headers = [
  { title: 'TEXT', key: 'sms_text' },
  { title: 'PHONE', key: 'sms_phone' },
  { title: 'DIRECTION', key: 'sms_direction' },
  { title: 'STATUS', key: 'sms_status' },
  { title: 'SENT', key: 'sms_sent_status' },
  { title: 'DATE', key: 'sms_schedule_date' },
  { title: 'COST', key: 'sms_cost' },
  { title: 'RESPONSE', key: 'sms_response' },
  { title: 'ID', key: 'sms_messageid' },
  { title: 'CONVERSATIONS', key: 'sms_conv' },
];

// Resolves status to color and text
const resolveStatusVariant = (status) => {
  switch (status) {
    case 1: return { color: 'primary', text: 'Sent' };
    case 2: return { color: 'success', text: 'Success' };
    case 3: return { color: 'error', text: 'Rejected' };
    case 4: return { color: 'warning', text: 'User on Blacklist' };
    default: return { color: 'info', text: 'Pending' };
  }
};

// Formats date to a readable format
const formatDate = (date) => {
  if (!date) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleString(undefined, options);
};

// Ref for storing table data
const _data = ref([]);

// Fetches data from API
const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/sms');
    _data.value = response.data; // Assuming response.data is an array of objects
  } catch (error) {
    console.error('Error fetching data:', error);
    _data.value = []; // Fallback to empty data
  }
};

// Fetch data on component mount
onMounted(fetchData);
</script>

<template>
  <VDataTable
    :headers="headers"
    :items="_data"
    :items-per-page="5"
  >
    <!-- Sms Text -->
    <template #items.sms_text="{ item }">
      <span>{{ item.sms_text }}</span>
    </template>

    <!-- Sms Phone -->
    <template #items.sms_phone="{ item }">
      <span>{{ item.sms_phone || 'N/A' }}</span>
    </template>

    <!-- Sms Direction -->
    <template #items.sms_direction="{ item }">
      <span>{{ item.sms_direction }}</span>
    </template>

    <!-- Sms Status -->
    <template #items.sms_status="{ item }">
      <span :class="resolveStatusVariant(item.sms_status).color">
        {{ resolveStatusVariant(item.sms_status).text }}
      </span>
    </template>

    <!-- Sms Sent Status -->
    <template #items.sms_sent_status="{ item }">
      <span>{{ item.sms_sent_status || 'N/A' }}</span>
    </template>

    <!-- Sms Schedule Date -->
    <template #items.sms_schedule_date="{ item }">
      <span>{{ formatDate(item.sms_schedule_date) }}</span>
    </template>

    <!-- Sms Cost -->
    <template #items.sms_cost="{ item }">
      <span>{{ item.sms_cost || 0 }}</span>
    </template>

    <!-- Sms Response -->
    <template #items.sms_response="{ item }">
      <span>{{ JSON.stringify(item.sms_response) }}</span>
    </template>

    <!-- Sms Message ID -->
    <template #items.sms_messageid="{ item }">
      <span>{{ item.sms_messageid || 'N/A' }}</span>
    </template>

    <!-- Sms Conversation -->
    <template #items.sms_conv="{ item }">
      <span>{{ item.sms_conv }}</span>
    </template>
  </VDataTable>
</template>
