<template>

    <head>
        <title>service</title>

    </head>
    <div class="container">

        <div class="our_service">
            <h1>our service </h1>
            <p style="font-size: 30px;">Maintaining a healthy lifestyle is essential for overall well-being and
                longevity. It involves a balanced
                diet rich in fruits,wimming, or strength training, helps keep the body fit, improves cardiovascular
                health,
                vegetables, whole grains, and lean proteins, which provide the necessary nutrients for energy and bodily

            </p>
            <br>

            <p style="font-size: 30px;">
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
            <div class="service" style="display: flex; gap: 120px;">


                <div class="selcet-wraper ">

                    <p class="pserv">type</p>
                    <select name="cars" id="cars" style="width: 253.65px;height: 53.61px;top: 627.3px;left: 110.78px;
                    box-shadow: 4.82px 4.82px 22.04px 0px rgba(0, 0, 0, 0.2); padding: 13px 45px 11px 17px;
                    border: none; font-family: system-ui; font-size: 19px; font-weight: bold;">
                        <option value="" selected disabled hidden>Personal service</option>
                        <option value="volvo">midcal</option>
                        <option value="saab">herat</option>
                        <option value="mercedes">eng</option>
                        <option value="audi">softwawre</option>
                    </select>
                </div> <!-- selcet-wraper -->

                <div class="RanSalr">
                    <p class="pserv">type</p>
                    <input type="text"> -
                    <input type="text">



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

            <div class="drop" style="display: flex; gap: 120px; margin-top: 50px;">
                <dv class="com">
                    <Cheekboox />
                </dv>
                <div class="com">
                    <Radio />
                </div >

                <div class="com">
                    <Drodown />

                </div>
            </div>
        </div>
        <div class="All-service marg"></div>
        <!-- sevice 2 -->
        <card v-for="card in Cards" :key="id" :Title="card.Title" :Price="card.Price" :desc="card.desc"
            :Category="card.Category" />


        <div class="product marg">

            <div class="detailes-product2">
                <span style="display: block; font-size: 42px; font-weight: 700; padding: 5px; ;
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

                <img class="img-product" src="public/mg2.png" alt="no photo" style="border-radius:10px ;">

            </div>
        </div><!-- product-->


    </div>

</template>

<script>


 // options  <<<<<
export default {
 
    data () {
        return {
            Cards: [
                {   id:1,
                    Title: 'SURGICAL MISSIONS',
                    Category: 'Personal Service 1',
                    desc: 'In addition to physical health, mental well-being plays a crucial role in maintaining a balanced life.Engaging in activities that   promote relaxation, such as meditation or yoga, In addition to physical health, mental well- beingplays a crucial role in maintaining a balanced life.Engaging in activities that',
                    Price: '200',
                },
                {id:2,
                    Title: 'SURGICAL MISSIONS',
                    Category: 'Personal Service 2',
                    desc: 'In addition to physical health, mental well-being plays a crucial role in maintaining a balanced life.Engaging in activities that   promote relaxation, such as meditation or yoga, In addition to physical health, mental well- beingplays a crucial role in maintaining a balanced life.Engaging in activities that awawdeh',
                    Price: '150',
                    
                }
                ,
                {id:3,
                    Title: 'SURGICAL MISSIONS',
                    Category: 'Personal Service 3',
                    desc: 'br3 In addition  to physical health, mental well-being plays a crucial role in maintaining a balanced life.Engaging in activities that   promote relaxation, such as meditation or yoga, In addition to physical health, mental well- beingplays a crucial role in maintaining a balanced life.Engaging in activities that awawdeh',
                    Price: '140',
                    
                }
            ]
        }
    }
}
</script>


<style>
.img-product {
    background-image: url("public/mg1.png");
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
    font-size: 19px;
    outline: none;
    padding: 5px;
}


@media only screen and (max-width: 900px) {
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
}
</style>