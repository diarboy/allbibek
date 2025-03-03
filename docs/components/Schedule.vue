<template>
  <div class="p-6">
    <input
      v-model="search"
      type="text"
      placeholder="Cari mata kuliah atau dosen..."
      class="p-3 border rounded-lg mb-4 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div class="overflow-x-auto">
      <table class="w-full border-collapse shadow-lg rounded-lg overflow-hidden min-w-max">
        <thead>
          <tr class="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-left">
            <th v-for="(header, index) in headers" :key="index" @click="sortBy(header.key)" 
                class="border p-4 cursor-pointer hover:bg-blue-700 transition-all text-center text-sm md:text-base">
              {{ header.label }}
              <span v-if="sortKey === header.key">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in filteredData" :key="index" class="border even:bg-gray-50 odd:bg-white hover:bg-gray-200 transition-all">
            <td v-for="(header, idx) in headers" :key="idx" class="border p-4 text-center text-gray-800 text-xs md:text-base">
              {{ row[header.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const search = ref('');
const sortKey = ref('');
const sortOrder = ref('asc');

const headers = [
  { label: 'Hari', key: 'hari' },
  { label: 'Waktu', key: 'waktu' },
  { label: 'Class', key: 'class' },
  { label: 'Mata Kuliah', key: 'mataKuliah' },
  { label: 'SKS', key: 'sks' },
  { label: 'Dosen', key: 'dosen' },
  { label: 'SIPEN', key: 'sipen' }
];

const data = ref([
  { hari: 'Rabu', waktu: '09:45 - 11:25', class: 'A2 Kampus 1', mataKuliah: 'MANAJEMEN SISTEM INFORMASI KESEHATAN', sks: 2, dosen: 'Fardhoni, A.Md.Kes., ST., MM', sipen: 'Aurelia Septia Apriani, Dimas Surya Putra' },
  { hari: 'Rabu', waktu: '13:00 - 15:30', class: '', mataKuliah: 'PEMROGRAMAN MOBILE 1', sks: 3, dosen: 'Mohamad Firdaus, M.Kom', sipen: 'Muhammad Labbiibul Muhsin' },
  { hari: 'Kamis', waktu: '08:00 - 10:30', class: '', mataKuliah: 'KEAMANAN DATA DAN INFORMASI', sks: 3, dosen: 'Mohamad Firdaus, M.Kom', sipen: 'Indah Rizkika, Dimas Dwi Rianto' },
  { hari: 'Kamis', waktu: '10:31 - 13:00', class: '', mataKuliah: 'MANAJEMEN SAINS DAN RISET OPERASIONAL', sks: 3, dosen: 'Dr. Indra Surya Permana, M.M.', sipen: 'Fasya Mahesa, Muhamad Septian Ardiansyah Yudhono' },
  { hari: 'Kamis', waktu: '13:01 - 15:30', class: '', mataKuliah: 'PEMBELAJARAN MESIN', sks: 3, dosen: 'Ade Sutriyono, S.Kom., MM.SI', sipen: 'Jaisyi Bagir Rafsyahid' },
  { hari: 'Sabtu', waktu: '10:45 - 12:25', class: '', mataKuliah: 'PEMASARAN DIGITAL', sks: 2, dosen: 'Ade Sutriyono, S.Kom., MM.SI', sipen: 'Muhammad Rizki, Sabili Muhammad Azka' },
  { hari: 'Sabtu', waktu: '13:00 - 14:29', class: '', mataKuliah: 'REKAYASA PERANGKAT LUNAK', sks: 3, dosen: 'Syaiful Ramadhan, M.Kom', sipen: 'Muhamad Fuad Aziz' },
  { hari: 'Sabtu', waktu: '14:30 - 17:00', class: '', mataKuliah: 'CLOUD COMPUTING 2', sks: 3, dosen: 'Yassep Azzeri, M.T', sipen: 'Ardiyansyah' }
]);

const filteredData = computed(() => {
  let result = [...data.value];
  if (search.value) {
    result = result.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(search.value.toLowerCase())
      )
    );
  }
  if (sortKey.value) {
    result.sort((a, b) => {
      let modifier = sortOrder.value === 'asc' ? 1 : -1;
      return a[sortKey.value] > b[sortKey.value] ? modifier : -modifier;
    });
  }
  return result;
});

const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

thead tr {
  background: linear-gradient(to right, #2563eb, #3b82f6);
  color: white;
}

th, td {
  padding: 12px;
  text-align: center;
}

tbody tr:nth-child(even) {
  background: #f9fafb;
}

tbody tr:hover {
  background: #e5e7eb;
  transition: background 0.3s;
}

@media (max-width: 768px) {
  th, td {
    padding: 8px;
    font-size: 12px;
  }
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
