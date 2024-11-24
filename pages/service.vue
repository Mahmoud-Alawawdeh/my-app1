<template>
    <div class="container">
        <div class="our_service">
            <h1>our service </h1>
            <p class="f18 f30">Maintaining a healthy lifestyle is essential for overall well-being and
                longevity. It involves a balanced
                diet rich in fruits,wimming, or strength training, helps keep the body fit, improves cardiovascular
                health,
                vegetables, whole grains, and lean proteins, which provide the necessary nutrients for energy and bodily

            </p>
            <br>
            <p class="f18 f30">
                swimming, or strength training, helps keep the body fit, improves cardiovascular health,
                and boosts mental clarity. Proper hydration, sufficient sleep, and managing stress are also critical
                aspects
                that contribute to
                a healthier lifestyle.vegetables, whole grains, and lean proteins, which provide the necessary nutrients
                for energy and bodily
                functions. Regular physical activity,vegetables, whole grains, and lean proteins, which provide the
                necessary nutrients for energy and bodily
                functions. Regular physical activity,
            </p>
        </div>
        <!-- our service -->
        <div class="All-service marg">
            <h1>All service</h1>
            <div class="service">

                <div class="com" style="padding: 20px;">
                    <dropdown_2 Res="selectcategory" :Options="Categorydropdown" />
                </div>

                <div class="RanSalr">
                    <p class="pserv">type</p>
                    <input v-model="mincost" type="text" placeholder="min"> -
                    <input v-model="maxcost" type="text" placeholder="max">

                </div> <!-- RanSalr -->

                <div class="date">
                    <p class="pserv">Dates</p>
                    <span class="pserv">From</span>
                    <input type="date" style="margin-left: 18px;">
                    <span class="pserv" style="margin-left: 18px;">To</span>
                    <input type="date" style="margin-left: 18px;">
                </div>

            </div>
        </div><!-- All-service-->
        <!-- service 2 -->
        <div class="All-service marg">

            <div class="service">

                <dv class="com">
                    <cheek_boox />
                </dv>

                <div class="com">
                    <Radio />
                </div>

                <div class="com">
                    <dropdown_2 Res="selectcost" :Options="dropdownsalary" />
                    
                </div>
            </div>
        </div>
        <div class="All-service marg" />
        <!-- sevice 2 -->
        <ProductCard
v-for="card in filteredcard" :key="card" :Id="card.productId" :title="card.productName"
            :price="card.cost" :desc="card.description" :category="card.category" :imgurl="card.imgurl" />
        <div class="product marg">

            <div class="detailes-product2">
                <span
style="display: block; font-size: 42px; font-weight: 700; padding: 5px; ;
                line-height: 63px; font-family: system-ui;color: #525252;"> SURGICAL MISSIONS</span>

                <p>In addition to physical health, mental well-being plays a crucial role in maintaining
                    a balanced life. Engaging in activities that
                    promote relaxation, such as meditation or yoga,Maintaining a healthy lifestyle is essential for
                    overall well-being and longevity. It involves a balanced diet rich in fruits, vegetables, whole
                    grains, and lean proteins, which provide the necessary nutrients for energy and bodily functions.
                    Regular physical activity, whether through exercises like walking.
                </p>
            </div>

            <div class="">
                <NuxtImg class="img-product" format="webp" src="/mg2.png"  alt="no photo"/>
              
            </div>
        </div><!-- product-->
    </div>
</template>

<script >
// options  <<<<<
export default {
    data() {
        return {
            Cards: [
                {
                    id: 1,
                    Title: 'SURGICAL MISSIONS',
                    Category: 'Personal Service 1',
                    desc: 'In addition to physical health, mental well-being plays a crucial role in maintaining a balanced life.Engaging in activities that   promote relaxation, such as meditation or yoga, In addition to physical health, mental well- beingplays a crucial role in maintaining a balanced life.Engaging in activities that',
                    Price: '200',
                    imgurl: 'mg1.png'
                },
                {
                    id: 2,
                    Title: 'SURGICAL MISSIONS',
                    Category: 'Personal Service 2',
                    desc: 'In addition to physical health, mental well-being plays a crucial role in maintaining a balanced life.Engaging in activities that   promote relaxation, such as meditation or yoga, In addition to physical health, mental well- beingplays a crucial role in maintaining a balanced life.Engaging in activities that awawdeh',
                    Price: '150',
                    imgurl: 'mg2.png'
                }
                ,
                {
                    id: 3,
                    Title: 'SURGICAL MISSIONS',
                    Category: 'Personal Service 3',
                    desc: 'br3 In addition  to physical health, mental well-being plays a crucial role in maintaining a balanced life.Engaging in activities that   promote relaxation, such as meditation or yoga, In addition to physical health, mental well- beingplays a crucial role in maintaining a balanced life.Engaging in activities that awawdeh',
                    Price: '140',
                    imgurl: 'mg1.png'
                }
            ],
            products: [],
            Categorydropdown: [],
            dropdownsalary: [],
            mincost: [],
            maxcost: [],
        }
    },
    computed: {
        filteredcard() {
            const category = store2().selectcategory;
            const costs = store2().selectcosts;
            
            if (!category && !costs && !this.mincost && !this.maxcost) {
                return this.products
            }

            if (!category && costs) {
                return this.products.filter(card => card.cost === cost);
            }

            if (category && !costs) {
                return this.products.filter(card => card.category === category);
            }

            if (category && costs) {
                return this.products.filter(card => card.category === category && card.cost === cost);
            }

            if (this.mincost) {

                return this.products.filter(card => card.cost >= this.mincost)
            }

            if (this.maxcost) {
                return this.products.filter(card => card.cost <= this.maxcost)
            }

            if (this.mincost && this.maxcost) {

                return this.products.filter(card => (card.cost >= this.mincost && card.cost <= this.maxcost))
            }

            
            return this.products.filter(card => card.category === category && card.cost <= this.maxcost && card.cost === costs
                && card.cost >= this.mincost
            )
        },

    },
    async mounted() {
        try {
            store2().cardprouduct = await $fetch('https://fakestoreapi.com/products/');
            console.log('Fetched products:', store2().cardprouduct);
            this.products = store2().cardprouduct.map((item) => ({
                productId: item.id,
                productName: item.title,
                cost: item.price,
                description: item.description,
                imageUrl: item.image,
                category: item.category
            }));;
        } catch (error) {
            console.error('Error fetching products:', error);

        }

        this.Categorydropdown = [...new Set(this.products.map((e) => e.category))];
        this.dropdownsalary = [...new Set(this.products.map((e) => e.cost))];

    },
}
</script>

<style>
.img-product {
    background-image: url("public/mg1.png");
    height: 100%;
    border-radius: 0 10px 10px 8px
}

.container {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10%;
}


.marg {
    margin: 40px 0px 40px 0px;
}


.our_service {

    margin: 40px 0px 40px 0px;
    text-align: center;
}

.pserv {
    margin: 0;
    font-size: 15px;
    color: #525252;
    font-weight: 300;
}

.All-service {
    border-top: 1px solid #dedede;
    padding: 10px;
    margin-top: 25px;
}

.service {
    display: flex;
    gap: 120px;
    margin-top: 50px;

}

.RanSalr input {
    width: 148.4px;
    height: 47.56px;
    background: #e5e5e5;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 19px;
    outline: none;
    padding: 5px;

}

.date input {
    width: 148.4px;
    height: 47.56px;
    background: #e5e5e5;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
    padding: 5px;
}

.f30 {
    font-size: 30px;
}

@media only screen and (max-width: 1024px) {
    .f18 {
        font-size: 18px;

    }

    .container {
        width: 80%
    }

    span {
        font-size: 14px;
    }

    p {
        font-size: 14px;
    }

    .product {

        display: flex;
        flex-direction: column;
        box-shadow: 3px 1px 7px rgba(99, 97, 97, 0.6)
    }

    .img-product {
        width: 100%;
    }

    .footer {
        margin-top: 50px;
        background-color: #f2f2f2;
        display: flex;
        flex-direction: column;
    }

    .detailes-product {
        width: auto;
        padding: 0;
    }

    .detailes-product2 {
        padding: 0;
    }

    .service {
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

}
</style>