<template>
  <div class="contain">
    <div class="cheek">
      <input id="1" v-model="jobs" type="checkbox" value="doctor" >
      <label for="1">doctor</label>
    </div>

    <div class="cheek">
      <input id="2" v-model="jobs" type="checkbox" value="software eng" >
      <label for="2">software eng</label>
    </div>

    <div class="cheek">
      <input id="3" v-model="jobs" type="checkbox" value="teachers" >
      <label for="3">teachers</label>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      jobs: []
    };
  }
};
</script>
<style>
.contain {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 4.82px 4.82px 22.04px 0px rgba(0, 0, 0, 0.2);
}

.cheek {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  transition: border 0.2s ease, background-color 0.2s ease;
}

input[type="checkbox"]:checked {
  background-color: rgb(147, 180, 27);
  border-color: rgb(147, 180, 27);
}

input[type="checkbox"]:checked::before {
  content: '';
  display: block;
  width: 5px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(31deg);
  position: absolute;
  top: 2px;
  left: 5px;
}

label {
  margin-left: 10px;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  transition: color 0.2s ease;
}

input[type="checkbox"]:checked+label {
  color: rgb(147, 180, 27);
  font-weight: bold;
}

.cheek:hover input[type="checkbox"] {
  border-color: rgb(147, 180, 27);
}


</style>