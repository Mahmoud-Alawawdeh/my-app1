<template>
    <div class="dropdown-container">
        <select v-model="selectedJobs" name="cars" id="cars" style="width: 253.65px;height: 53.61px;top: 627.3px;left: 110.78px;
                    box-shadow: 4.82px 4.82px 22.04px 0px rgba(0, 0, 0, 0.2); padding: 13px 45px 11px 17px;
                    border: none; font-family: system-ui; font-size: 19px; font-weight: bold;">
                        <option value="" selected disabled hidden>Personal service</option>
                        <option value="volvo">midcal</option>
                        <option value="saab">herat</option>
                        <option value="mercedes">eng</option>
                        <option value="audi">softwawre</option>
                    </select>
      <h3>Your selected jobs: {{ selectedJobs }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedJobs: []  
      };
    }
  };
  </script>


<style scoped>
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
  height: auto; 
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