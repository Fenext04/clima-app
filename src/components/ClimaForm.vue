<template>
    <form @submit.prevent="gerarClima()">
        <div class="row mt-3 mb-3">
            <div class="col-12">
                <div class="input-group mb-3">
                    {{}}
                    <input type="text" class="form-control" v-model="form.cidade" placeholder="Digite o nome da cidade" aria-label="Digite o nome da cidade" aria-describedby="button-addon2">
                    <button class="btn btn-verde-escuro" type="submit" id="button-addon2" :disabled="form.cidade == '' || $store.state.clima.is_loading">
                        
                        <span class="spinner-border spinner-border-sm" v-if="$store.state.clima.is_loading" role="status" aria-hidden="true"></span>
                        
                        <i class="bi bi-search text-white" v-if="!$store.state.clima.is_loading"></i>
                    </button>
                    
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import {mapActions} from "vuex"
export default {
    name: "ClimaForm",
    data: () =>({
        form:{
            cidade: ""
        }
    }),
    methods:{
        ...mapActions(["getClima"]),
        gerarClima(){
            this.getClima(this.form.cidade.trim())
        }
    }
}
</script>

<style scoped>
    .btn-verde-escuro{
        background-color: #004d3d;
    }
    .btn-verde-escuro:hover{
        background-color: #025746
    }
</style>