<template>
    <div class="radio-container">
        <div class="radio-item">
            <input type="radio" id="one" value="One" v-model="choies" />
            <label for="one">One</label>
        </div>

        <div class="radio-item">
            <input type="radio" id="two" value="Two" v-model="choies" />
            <label for="two">Two</label>
        </div>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            choies: null
        };
    }
};
</script>
<style>
.radio-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 4.82px 4.82px 22.04px 0px rgba(0, 0, 0, 0.2);
}

.radio-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

input[type="radio"] {
    appearance: none;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    transition: border 0.2s ease;
}

input[type="radio"]:checked {
    border: 6px solid rgb(147, 180, 27);
}

label {
    margin-left: 10px;
    font-size: 18px;
    color: #333;
    cursor: pointer;
    transition: color 0.2s ease;
}

input[type="radio"]:checked+label {
    color: rgb(147, 180, 27);

    font-weight: bold;
}

h3 {
    font-size: 20px;
    color: #555;
    margin-top: 20px;
}

.radio-item:hover input[type="radio"] {
    border-color: #4caf50;
}
</style>