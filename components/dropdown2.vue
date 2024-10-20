<template>
    <div class="contain">
      <div class="dropdown-container" @click="toggleDropdown">
        <div class="selected">{{ selectedJob || 'Choose your job' }}</div>
        <div v-if="isOpen" class="dropdown-list">
          <div v-for="job in jobs" :key="job"  class="dropdown-item" @click="selectJob(job)" @mouseover="hoveredJob = job" @mouseleave="hoveredJob = ''"
            :class="{ 'hovered': hoveredJob === job }">
            {{ job }}
          </div>
        </div>
      </div>
      <h3>Your selected job: {{ selectedJob }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        selectedJob: '',
        hoveredJob: '',
        jobs: ['Doctor', 'Software Engineer', 'Teacher'],
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectJob(job) {
        this.selectedJob = job;
        this.isOpen = true;
      },
    },
  };
  </script>
  
  <style>
  .contain {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 6.28px 6.28px 28.7px 0px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-container {
    position: relative;
    width: 100%;
    cursor: pointer;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    background: #fff;
  }
  
  .selected {
    font-size: 16px;
    color: #333;
  }
  
  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 100;
  }
  
  .dropdown-item {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .dropdown-item.hovered,
  .dropdown-item:hover {
    background-color: rgb(147, 180, 27);
    color: white;
  }
  
  h3 {
    font-size: 18px;
    color: #555;
    margin-top: 20px;
  }
  </style>