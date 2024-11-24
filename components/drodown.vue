<template>
  <div class="dropdown-container">
    <select v-model="store1()[Res]" class="selectdrop">
      <option selected disabled hidden>choies Your job</option>
      <option v-for="option in Options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    Options: { default: [], type: Array },
    Res: { default: '', type: String }
  }
};
</script>
<style scoped>

.selectdrop {
  width: 253.65px;
  height: 53.61px;
  box-shadow: 4.82px 4.82px 22.04px 0px rgba(0, 0, 0, 0.2);
  padding: 13px 45px 11px 17px;
  border: none;
  font-family: system-ui;
  font-size: 19px;
  font-weight: 700;


}

.dropdown-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: border 0.3s ease, color 0.3s ease, background-color 0.3s ease;


  background-position: right 10px top 50%;
  background-size: 12px;
  height: auto;
}

.dropdown[multiple] {
  height: auto; /* Allow it to grow based on content */
}

.dropdown:hover {
  border-color: #4caf50;
}

.dropdown:focus {
  border-color: #4caf50;
  outline: none;
}

.dropdown option {
  padding: 10px;
  font-size: 16px;
}

h3 {
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}
</style>