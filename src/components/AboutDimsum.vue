<template>
    <section class="about" id="about">
        <div class="max-width">
            <div class="about-content">
                <div class="column left">
                    <img alt="about" src="../assets/ab.jpeg" class="rounded-br-full" />
                </div>
                <div class="column right z-20">
                    <div class="text">Dim Sum</div>
                    <p>
                        Dim Sum (Chinese: 點心 Cantonese accent meaning as you like, made to order) is a Chinese snack or appetizer.
                        It is commonly eaten with tea (yum cha 飲茶 drinking tea served with dim sum) that is known around the world.
                        It is a term for many foods. It is usually steamed food such as dumplings, steamed buns, Nagao, gyoza, etc.,
                        packaged in small containers such as bamboo baskets or small plates.
                        In some Chinese restaurants, dim sum is steamed on the stove waiting for customers to order.
                        Some stores put a cart or a basket around the neck. Let employees present to customers in the store.
                        While waiting for another meal Some fried foods may also be included in the dim sum menu.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

 <script>
export default {
    name: 'About-Dimsum'
}
</script>
<style scoped>
    .about .about-content .left img{
    margin-left:50px;
    height:400px;
    width:400px;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.3s, filter 1.5s ease-in-out;
    overflow: hidden;
}
.about .about-content .left{
    width: 45%;
}
.about .about-content .right{
    margin-right: 50px;
    width: 55%;
}
.about .about-content .right .text{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}
.about .about-content .right .text span{
    color: #db2929;
}
.about .about-content .right p{
    text-align: justify;
}
.about-content {
    display: flex;
    padding-top: 150px;

}
</style>