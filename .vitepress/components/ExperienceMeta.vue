<template>
  <div class="event-meta">
    <div class="left">
      <FontAwesomeIcon icon="calendar-days" />
      <span>{{ start }} - {{ end }}</span>
    </div>
    <div class="right">
      <FontAwesomeIcon icon="location-dot" />
      <span>{{ location }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  start: String,
  end: String,
  location: String
})
</script>

<style scoped>
.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  margin: 0.5rem 0;
  gap: 1rem;
  flex-wrap: wrap;
}

.left, .right {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

i {
  color: #555;
}
</style>
