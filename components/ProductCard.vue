<template>
  <div id="product" class="product">

    <Icon class="close-pop" name="prime:times" @click="togeldelete" />

    <div class="apsulte">
      <div v-if="isOpen2" class="container-pop">
        <Icon class="close-pop" name="prime:times" @click="togeldelete" />
        <div class="pop-up">
          <div class="pop-section">
            <div class="">
              <h2
                style="background-color: #8cc63f;color: white; border-radius: 10px; padding: 5px;border: 2px solid black;margin-top: 40px;">
                Are you sure you want to remove your heart forever?</h2>
              <div class="del-btn ">
                <button v-if="isOpen2" class="delete_btn" @click="DeleteCard">yes</button>
                <button v-if="isOpen2" class="edit_btn" @click="togeldelete">no</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ----------------------------------------------------------------------------- -->
    <div class="apsulte">
      <div v-if="isOpen" class="container-pop">
        <Icon class="close-pop" name="prime:times" @click="togelpopup" />
        <div class="pop-up">
          <div class="pop-section">
            <div>
              <label for="">name</label>
              <input v-model="titleCard" class="pop-up-input" type="text" placeholder="name">
            </div>
            <div>
              <label for="">category</label>
              <input v-model="categoryCard" class="pop-up-input" type="text" placeholder="Category">
            </div>
          </div>
          <div class="pop-section">
            <div>
              <label for="">description</label>
              <input v-model="descCard" class="pop-up-input" type="text" placeholder="Description">
            </div>
            <div>
              <label for="" style="font-size: 18px;">price</label>
              <input v-model="priceCard" class="pop-up-input" type="text" placeholder="Price">
            </div>
          </div>
        </div>
        <button class="save-btn" @click="saveChanges">Save</button>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------- -->
    <div class="detailes-product">
      <div class="car1">
        <span class="titel-product">{{ titleCard }}</span>
        <span class="Category">{{ categoryCard }}</span>
      </div>

      <div class="desc">
        <p>{{ descCard }}</p>
      </div>

      <div class="salry">
        <div>
          <p class="price">${{ priceCard }}</p>
        </div>

        <button v-if="!isOpen" class="edit_btn" @click="togelpopup">Edit</button>

        <div class="gap-25 gap-0" style="display: flex;">
          <div style="border-right: #525252 1px solid; display: flex; gap: 10px;">
            <img class="imgphonesize" src="public/phone.svg" alt="no photo">
            <a class="phonesize marg-r-15 marg-r-30" href="tel:+91123-456-7890">+91123-456-7890</a>
          </div>
          <div class="gap-25 gap-0" style="display: flex;">
            <img class="imgphonesize" src="public/map.svg" alt="no photo">
            <span class="phonesize f26">Amman</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img class="img-product" src="public/mg2.png" alt="no photo">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    Id: { type: Number },
    title: { default: 'No Title', type: String },
    category: { default: 'Personal Service', type: String },
    price: { default: 0, type: Number },
    desc: { default: 'Personal Service', type: String },
    imgurl: { default: '', type: String }
  },
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      IdCard: this.Id,
      titleCard: this.title,
      categoryCard: this.category,
      priceCard: this.price,
      descCard: this.desc,

    };
  },
  methods: {
    togelpopup() {
      this.isOpen = !this.isOpen;

    },
    togeldelete() {
      this.isOpen2 = !this.isOpen2;
    },
    // إرسال البيانات المعدلة عبر PATCH API
    saveChanges() {

      const updatedUserData = {
        Id: store2().cardprouduct.Id,
        title: store2().cardprouduct.title,
        category: store2().cardprouduct.category,
        description: store2().cardprouduct.desc,
        price: store2().cardprouduct.price


      };
      console.log('Updated product data:', updatedUserData);
      const url = `https://fakestoreapi.com/products/${this.Id}`;
      try {
        const response = $fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `  // Add Authorization header
          },
          body: JSON.stringify(updatedUserData)
        });
        console.log('تم تعديل البيانات بنجاح:', response);
        this.isOpen = false;
      } catch (error) {
        console.error('حدث خطأ أثناء تعديل البيانات:', error);
      }
    },


    async DeleteCard() {
      const url = `https://fakestoreapi.com/products/${this.Id}`;
      try {
        const response = await $fetch(url, {
          method: 'DELETE',
        });
        console.log('تم حذف البيانات بنجاح:', response);
        this.isOpen2 = false;

      } catch (error) {
        console.error('حدث خطأ أثناء حذف البيانات:', error);
      }
    }
  }
};
</script>


<style>
.product {
  display: flex;
  box-shadow: 6.28px 6.28px 28.7px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 50px;
  position: relative;
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

.price {
  color: #93b41b;
  font-family: Poppins;
  font-size: 42px;
  line-height: 63px;
  text-align: left;
  font-weight: bold;
}

.titel-product {
  display: block;
  font-size: 42px;
  font-weight: 700;
  padding: 5px;
  line-height: 63px;
}

.Category {
  background-color: #93b41b;
  color: white;
  width: 286.9px;
  height: 36.11px;
  border-radius: 2px;
  font-size: 24.12px;
  line-height: 36.18px;
  padding: 2px 64px 2px 16px;
  border-radius: 6px;
}

.desc {
  overflow: hidden;
  max-height: 60px;
}

.f26 {
  font-size: 26px;
}

.marg-r-30 {
  margin-right: 30px;
}

.gap-25 {
  gap: 25px;
}

.gap-10 {
  gap: 10px
}

.edit_btn {
  font-family: system-ui;
  width: 100px;
  font-size: 20px;
  height: 50px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  box-shadow: 6.28px 6.28px 8.7px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer
}

.edit_btn:hover {
  background-color: rgb(147, 180, 27);
  font-weight: 700;
  color: white;
}

.delete_btn {
  font-family: system-ui;
  width: 100px;
  font-size: 20px;
  height: 50px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  box-shadow: 6.28px 6.28px 8.7px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer
}

.delete_btn:hover {
  background-color: rgb(204, 10, 10);
  font-weight: 700;
  color: white;
}

.save-btn {
  font-family: system-ui;
  width: 100px;
  font-size: 20px;
  height: 40px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  box-shadow: 6.28px 6.28px 8.7px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 88%;
  cursor: pointer
}

.save-btn:hover {
  background-color: rgb(147, 180, 27);
  font-weight: 700;
  color: white;


}

.pop-up-input {
  height: 50px;
  border-radius: 10px;
  width: 600px;
  border: none;
  box-shadow: 6.28px 6.28px 28.7px 0px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  padding: 10px;
}

.pop-up {

  display: flex;
  justify-content: space-evenly;
  gap: 70px;
  padding: 50px
}

.pop-section {
  display: flex;
  flex-direction: column;
  gap: 50px;

}

.container-pop {
  position: relative;

  width: auto;
  height: 400px;
  box-shadow: 7px 11px 32px 0px rgba(0, 0, 0, 0.07);
}

.close-pop {
  position: absolute;
  right: -16px;
  top: 20px;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  color: #b70c0c;
  cursor: pointer
}

.apsulte {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 12px 11px 32px 0px rgba(0, 0, 0, .5);
}

.del-btn {
  display: flex;
  gap: 50px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

}

@media only screen and (max-width: 1024px) {
  .imgphonesize {
    height: 20px;
    width: 20px;
  }

  .salry {
    padding: 0 10px;

  }

  .phonesize {
    font-size: 16px;

  }

  .price {
    font-size: 22px;
  }

  .titel-product {
    font-size: 24px;
    padding: 10px;
  }

  .Category {
    font-size: 20px;
  }

  .desc {
    max-height: 100%;
    margin: 15px;
  }

  .marg-r-15 {
    margin-right: 15px;
  }

  .gap-0 {
    gap: 0;
  }

  .pop-up {
    flex-direction: column;
    gap: 20px;
  }

  .pop-up-input {
    width: auto;
  }
}
</style>