<template>
    <div class="row justify-content-center centralizar">
        <div class="col-12 col-md-6 col-lg-5 col-xl-4">
            <div class="card text-white rounded-4 ">
                <div class="card-body bg-esmeralda rounded-4 px-5">
                    <h4 class="card-title text-center">
                        Confira o clima de uma cidade
                    </h4>
                    <ClimaForm></ClimaForm>
                    <div class="alert alert-danger text-center" v-if="$store.state.clima.error" role="alert">
                        {{$store.state.clima.error}}
                    </div>
                    <ClimaCidade v-if="$store.state.clima.data.sys" :clima="clima"></ClimaCidade>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClimaForm from '@/components/ClimaForm.vue';
import ClimaCidade from '@/components/ClimaCidade.vue';


export default {
    components: { ClimaForm, ClimaCidade },
    computed:{
        clima(){
            return this.$store.state.clima
        }
    }
   
}
</script>

<style scoped>
     .bg-esmeralda{
        background-color:#00dc82 ;
    }
    .centralizar{
        margin-top: 25vh;
    }
</style>
<style>
    
</style>