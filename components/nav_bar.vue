<template>
    <div class="nav">
        <div class="logo">
            <img src="public/logo.png" alt="Healthy" class="img" >

        </div>
        <div style="flex-grow: 1;"/>
        <div style="flex-grow: 1;"/>
        <div class="navword">
            <nuxt-link :to="{ name: 'index' }" class="link hover-text"> Home</nuxt-link>
            <nuxt-link :to="{ name: 'about' }" class="link hover-text"> About</nuxt-link>
            <nuxt-link :to="{ name: 'service' }" class="link hover-text"> Service</nuxt-link>
        </div>
        <div style="flex-grow: 1;"/>
        <div class="search">
            <div class="search-input">
                <input type="text" placeholder="seach..." class="input-serch">
                <img src="public/serch-icon.png" alt="no photo" style="width: 20px; height: 20px; position: absolute;top: 40px;left: 78%;cursor: pointer;">
            </div>

        </div>
        <div style="flex-grow: 1;"/>
        <div class="btn-translate">
            <button class="btn">English</button>
        </div>
        <div class="burgermenu" @click="toggleMenu">

            <Icon v-if="!isOpen" class="phonemenu" name="prime:list" />
            <Icon v-if="isOpen" class="phonemenu" name="prime:times" />
        </div>
        <div class="mobile-menu" :class="{ open: isOpen }">
            <nuxt-link :to="{ name: 'index' }" class="link hover-text">Home</nuxt-link>
            <nuxt-link :to="{ name: 'about' }" class="link hover-text">About</nuxt-link>
            <nuxt-link :to="{ name: 'service' }" class="link hover-text">Service</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {  
      isOpen: false
    }
  },
  mounted () {
   
    

  },
  methods: {
    toggleMenu () {
       this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: system-ui;
}
.nav {
    width: 100%;
    height: 70px;
    padding: 20px 64px;
    background-color: rgb(255, 255, 255);
    box-shadow: 7px 11px 32px 0px rgba(0, 0, 0, 0.07);
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
}

.navword {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 24px;
    color: rgb(133, 145, 145);

}

.btn {

    box-shadow: 3.14px 4.19px 12.56px 0px rgba(0, 0, 0, 0.21);

    width: 97.02px;
    height: 31.32px;
    top: 19.86px;
    left: 1787.04px;
    gap: 0px;
    background-color: rgba(242, 242, 242, 1);
    cursor: pointer;
    border-style: none;
}

.btn:hover {
    opacity: 0.8;

}

.router-link-active.router-link-exact-active {
    color: #93b41b;
    font-weight: bold;
}

.img {
    height: 30px;

}

.sp-nav {
    color: #93b41b;
    font-size: 22px;
    font-weight: bold;

}

.link {
    text-decoration: none;
    color: rgb(126, 128, 128)
}

.hover-text {
    position: relative;
    display: inline-block;
    color: #333;
    text-decoration: none;
}

.hover-text::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 4px;
    top: 50px;
    left: 0;
    background-color: #93b41b;
    transition: width 0.5s ease;
    font-weight: bold;
}

.hover-text:hover::after {
    width: 100%;
}

.search {
    margin: -20px;
}

.search-input {
    width: 450.39px;
    left: 1284.58px;
    background: linear-gradient(90deg, #D9E021 0%, #8CC63F 100%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}

.input-serch {
    width: 406.98px;
    border-radius: 20px;
    height: 53.11px;
    padding: 10px;
    border-style: none;
    background-color: rgba(255, 255, 255, .5);
    margin: 5%;
    font-size: 20px;
    color: rgb(0, 0, 0);
    border: none;
    outline: none;
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-translate {
    display: flex;
    justify-content: center;
    align-items: center;
}

.phonemenu {
    color: #93b41b;
    width: 40px;
    height: 40px;
    cursor: pointer;
}

.burgermenu {
    display: none;
}

.mobile-menu {
    display: none;
}

@media (max-width: 1024px) {
    .burgermenu {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 35%);
    }
    .navword {
        display: flex;
        gap: 20px;
    }
    .navword {
        display: none;
    }
    .search {
        display: none;
    }
    .btn-translate {
        display: none;
    }
    .mobile-menu {
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: white;
        padding: 20px;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
    }
    .mobile-menu.open {
        transform: translateX(0);
    }
    .link {
        text-decoration: none;
        color: rgb(126, 128, 128);
        font-size: 18px;
        padding: 10px;
    }
.nav{
    margin-bottom: 30px;
}
}
</style>