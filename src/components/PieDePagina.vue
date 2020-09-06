<template>
  <footer class="footer hero is-info">
    <section class>
      <div class="hero-body">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child">
              <p class="title">Clínica Pirulo 🏥</p>
              <span class="is-size-6">
                <p class="subtitle mb-3">San Martín 420</p>
                <p class="subtitle mb-3">S2600KUE</p>
                <p class="subtitle mb-3">Venado Tuerto</p>
                <p class="subtitle mb-3">Santa Fe</p>
              </span>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child">
              <p class="title">Horario de atención ⏰</p>
              <div>
                <span>
                  <p class="subtitle mb-0">Lunes a Viernes:</p>
                  <p class="subtitle">⌚ 8:00 a 19:30</p>
                  <p class="subtitle mb-0">Sábados:</p>
                  <p class="subtitle">⌚ 8:00 a 12:30</p>
                </span>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child">
              <p class="title">Contactenos 📞</p>
              <div class="contact">
                <span class="has-text-left">
                  <span class="is-block mb-3">
                    <img
                      src="@/assets/img/redes/instagram.png"
                      alt="instagram"
                      width="32"
                      class="imgtext grow"
                    />
                    <span class="subtitle pl-3">PiruloSalud</span>
                  </span>

                  <span class="is-block mb-3">
                    <img
                      src="@/assets/img/redes/telegram.png"
                      alt="telegram"
                      width="32"
                      class="imgtext grow"
                    />
                    <span class="subtitle pl-3">(3462) - 544242</span>
                  </span>

                  <span class="is-block mb-3">
                    <img
                      src="@/assets/img/redes/twitter.png"
                      alt="twitter"
                      width="32"
                      class="imgtext grow"
                    />
                    <span class="subtitle pl-3">PiruloSalud</span>
                  </span>
                  <span class="is-block">
                    <img
                      src="@/assets/img/redes/mail.png"
                      alt="mail"
                      width="32"
                      class="imgtext grow"
                    />
                    <span class="subtitle pl-3">rrhh@pirulo.com</span>
                  </span>
                </span>
              </div>
            </article>
          </div>
          <!-- <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Four</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div> -->
        </div>
        <div class="container"></div>
      </div>
      <div class="content is-info mgb-small">
        <b-tooltip label="Love 🤍" type="is-danger">
          <p>
            Made with 🍰&nbsp;by&nbsp;
            <span class="rohanx">Rohan</span>
          </p>
        </b-tooltip>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "PieDePagina",
};
</script>
