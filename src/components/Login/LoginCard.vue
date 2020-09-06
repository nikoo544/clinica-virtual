<template>
  <section>
    <form action="" class="box">
      <div class="">
        <h1 class="title has-text-black	">Iniciar Sesion</h1>
        <img
          class="flip3d"
          src="@/assets/3209049.svg"
          alt="Clinica Logo"
          width="150"
        />
      </div>
      <div class="field">
        <label for="" class="label is-pulled-left">Email</label>
        <div class="control">
          <input
            type="email"
            placeholder="Correo electronico"
            class="input"
            require
          />
        </div>
      </div>
      <div class="field">
        <label for="" class="label is-pulled-left">Password</label>
        <div class="control">
          <input
            type="password"
            placeholder="password"
            class="input"
            required
          />
          <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <button class="button is-success">
          Registrarse
        </button>
        <button class="button is-info  ml-3">
          Ingresar
        </button>
      </div>
      <div class="buttons">
        <label for="" class="label is-pulled-left is-inline-block"
          >Inicia sesion con:</label
        >

        <b-button type="is-link" expanded>Continuar con Facebook</b-button>
        <b-button type="is-dark" expanded>Continuar con Github</b-button>
      </div>
    </form>
  </section>
</template>
