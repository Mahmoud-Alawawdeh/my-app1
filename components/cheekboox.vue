<template>
    <div class="dropdown">
      <button @click="toggleDropdown" class="dropdown-toggle">
        {{ selectedOption || placeholder }} ▼
      </button>
      <ul v-if="isOpen" class="dropdown-menu">
        <li 
          v-for="option in options" 
          :key="option" 
          @click="selectOption(option)" 
          class="dropdown-item"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const isOpen = ref(false);
  const selectedOption = ref(null);
  
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  // Select an option
  const selectOption = (option) => {
    selectedOption.value = option;
    emit('update:modelValue', option); // Emit the selected option
    isOpen.value = false; // Close the dropdown
  };
  </script>
  
  <style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-toggle {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #ccc;
    background-color: white;
    z-index: 1000;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown-item {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f0f0f0;
  }
  </style>