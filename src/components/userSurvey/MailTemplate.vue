<template>
  <v-card
    class="mt-2"
    elevation="2"
    outlined
  >
    <v-card class="pa-7">
      <h2> Mail Vorlage an Ihre Mitarbeitenden </h2>
      <br>
      <!-- Mail Text -->
      <p>Liebe Kolleg*Innen,</p>
      <p>unsere TU-Einheit führt eine Bilanzierung der CO<sub>2</sub>-Emissionen für das Kalenderjahr {{ umfrageJahr }}  durch. Hierfür werden einige Informationen bezüglich Ihrer Dienstreisen, Ihrer Pendelwege sowie den von Ihnen verwendeten IT-Geräte benötigt. Der folgende Link führt Sie zu einer Umfrage in der Ihre Daten abgefragt werden. Alle Angaben werden dabei anonymisiert verarbeitet und dargestellt: </p>
      <p>
        <a
          target="_blank"
          :href="umfrageLink"
        >{{ umfrageLink }}</a>
      </p>
      <p>Die Umfrage nimmt ungefähr 10 Minuten Ihrer Zeit in Anspruch. Für die Umfrage wird das vollständige Kalenderjahr {{ umfrageJahr }} betrachtet. </p>
      <p>Hinter einigen Fragen befindet sich ein Fragezeichensymbol. Dort finden Sie zusätzliche Hinweise und Informationen, die zur Beantwortung der Fragen hilfreich sind. </p>
      <p>
        Bei weiteren Nachfragen oder Anmerkungen wenden Sie sich gerne an 
        <a
          target="_blank"
          :href="'mailto:'+cookieAttribut"
        >{{ cookieAttribut }}</a>.
      </p>
      <p>Vielen Dank für Ihre Teilnahme. </p>
    </v-card>
  </v-card>
</template>

<script>
import Cookies from "../Cookie.js"

export default {
  name: "MailTemplate",

  props: {
    umfrageJahr: {
      default: "UNKNOWN_YEAR",
      type: String,
    },
    umfrageLink: {
      default: "UNKNOWN_LINK",
      type: String
    },
  },

  computed: {
    // we need this for some reason, since a direct call to Cookies.getCookieAttribut() in the template does not evaluate.
    cookieAttribut: function () {
      return Cookies.getCookieAttribut('username')
    }
  },

};
</script>