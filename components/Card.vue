<template>


<div class="product " id="product">
            <div class="detailes-product">
                <div class="car1">
                    <span style="display: block; font-size: 42px; font-weight: 700; padding: 5px; ;
                line-height: 63px; font-family: system-ui;"> {{this.Title}}</span>

                    <span
                        style="background-color: #93b41b; color: white; width: 286.9px;height: 36.11px;
                    border-radius: 2px; font-size: 24.12px;line-height: 36.18px; padding:2px 64px 2px 16px; border-radius: 6px;">{{ this.Category }}</span>
                </div>
                <div class="car2">
                    <p>{{this.desc}}</p>

                </div>
                <div class="salry">
                    <div>
                        <p
                            style=" color: #93b41b; font-family: Poppins;font-size: 42px;line-height: 63px;text-align: left;font-weight: bold; ">${{Price}}</p>
                    </div>
                    <div style="display: flex; gap: 25px;">
                        <div style="border-right: #525252 1px solid; display: flex; gap: 10px;">
                            <img src="public/phone.svg" >
                            <a href="tel:+91123-456-7890"  style="margin-right:30px ;">+91123-456-7890</a>
                        </div>
                        <div style="display: flex;gap: 10px;">
                            <img src="public/map.svg">
                            <span style="font-size: 26px;">amman</span>

                        </div>
                    </div>
                </div>

            </div>

            <div class="">

                <img class="img-product" src="public/mg1.png" alt="no photo" style="border-radius:10px ;">

            </div>


        </div><!-- product-->


</template>
<script>
export default {
  props: {
    Title: { default: ' No Title', type: String },
    Category: { default: 'Personal Service', type: String },
    Price: { default: undefined },
    desc: { default: 'Personal Service', type: String },
    imgsrc:{default:'undefined'}

  },
  methods: {
    
  },
  computed: {

  }
  
}


</script>
<style>


.product {
    display: flex;
    box-shadow: 6.28px 6.28px 28.7px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-bottom: 50px;
}

.detailes-product {
    padding: 40px 50px 40px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.detailes-product2 {
    padding: 60px 80px 105px 80px;

}

.salry {

display: flex;
align-items: center;
justify-content: space-between;
}
</style>