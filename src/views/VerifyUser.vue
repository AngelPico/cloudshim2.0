<template>
  <div>
    <p v-if="error">Ha ocurrido un error: {{ error }}</p>
    <p v-else-if="loading">Cargando...</p>
    <p v-else>¡Tu cuenta ha sido confirmada con éxito!</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";

export default {
  setup() {
    const error = ref(null);
    const loading = ref(true);
    const router = useRouter();

    onMounted(async () => {
      const { error: confirmError } = await supabase.auth.verifyOTP({
        type: "signup",
        token: router.currentRoute.value.query.token,
      });

      if (confirmError) {
        error.value = confirmError.message;
      } else {
        // Aquí puedes redirigir al usuario o actualizar el estado de la aplicación
      }

      loading.value = false;
    });

    return {
      error,
      loading,
    };
  },
};
</script>
