<template>
    <div class="row justify-content-center border-top border-2 py-3">
        <div class="col-12 text-center">
            <h3 class="fw-bold">
                <i class="bi bi-geo-alt-fill"></i> {{clima.data.name}}
                <img width="40" :src="clima.data.sys ? `https://countryflagsapi.com/png/${clima.data.sys.country}` : 'https://countryflagsapi.com/png/br'" alt="">
            </h3>
            <div class="mt-3 mb-3">{{clima.data.main.temp}} °C</div>
            <div class="fw-bold">{{clima.data.weather[0].description}} <img width="50" :src="`https://openweathermap.org/img/wn/${clima.data.weather[0].icon}@2x.png`" alt=""></div>
           
            <div class="row justify-content-center mt-4">
                <div class="col-5">
                    <span><i class="bi bi-droplet-fill"></i> {{clima.data.main.humidity}}%</span>
                </div>
                <div class="col-4">
                    
                    <span><i class="bi bi-wind"></i> {{clima.data.wind.speed}} Km/h</span>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "ClimaCidade",
   
    props:{
        clima: Object,
        default: {}
    },
    
   
}
</script>

<style>
    
</style>