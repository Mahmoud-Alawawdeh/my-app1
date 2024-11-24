<template>
    <div class="dropdown-container" @click="toggleDropdown">
      <div class="selected">{{  store2()[Res] ?  store2()[Res]  : '💚Choose your choies ' }}</div>
      <div v-if="store2()[`${Res}_isOpen`]" class="dropdown-list">
        <div v-for=" option in Options" :key="option" class="dropdown-item" @click="selectJob(option)">
          
          <div> {{ option }}</div>
         
        </div>
      </div>
    </div>
  
</template>

<script>
export default {

  props: {
    Options: { default: [], type: Array },
    Res: { default: '', type: String }
  },
  data() {
    return {
    }
  
  },

  mounted() {
    store2()[this.Res] = undefined
    store2()[`${this.Res}_isOpen`] = false
  },
  methods: {
    toggleDropdown() {
      store2()[`${this.Res}_isOpen`] = !store2()[`${this.Res}_isOpen`]
    },
    selectJob(option) {
      store2()[this.Res] = option
      console.log(store2()[this.Res])
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(147, 180, 27); 
  border-radius: 10px;
}
.dropdown-container {
  position: relative;
  width: 300px;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  background: #fff;
  box-shadow: 4.82px 4.82px 22.04px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
}
.selected {
  font-size: 18px;
  font-weight: 650;
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
  max-height: 250px; 
  overflow-y: auto;
}
.dropdown-item {
  display: flex;
  gap: 10px;
  margin: 0.5em;
  border-radius: 0.7em;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-shadow: 4.82px 4.82px 22.04px 0px rgba(0, 0, 0, 0.1);
}
.dropdown-item.hovered,
.dropdown-item:hover {
  background-color: rgb(147, 180, 27);
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h3 {
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}
</style>