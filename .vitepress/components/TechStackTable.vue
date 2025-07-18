<template>
  <div class="table-wrapper">
    <table class="tech-table">
      <thead>
      <tr>
        <th>Layer</th>
        <th>Technologies</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(techs, layer) in stack" :key="layer">
        <td class="layer">{{ layer }}</td>
        <td class="techno">
          <ul>
            <li v-for="tech in techs" :key="tech">{{ tech }}</li>
          </ul>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const stack = {
  Language: ['Golang', 'TypeScript'],
  'Front-end': ['Vue 3', 'Angular'],
  Cloud: ['AWS', 'CDK'],
  'CI/CD': ['Circle CI']
}
</script>

<style scoped>
.table-wrapper {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.tech-table {
  border-collapse: collapse;
  width: 90%;
  max-width: 800px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  overflow: hidden;
}

.tech-table th,
.tech-table td {
  padding: 1rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid #eee;
}

.layer {
  width: max-content;
  font-weight: 800;
}

.techno {
  width: 100%;
}

.tech-table th {
  background-color: #cc5500;
  color: #fff;
  font-weight: 600;
}

.tech-table ul {
  margin: 0;
  padding-left: 1.2rem;
}
</style>
