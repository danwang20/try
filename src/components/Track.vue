<template>
  <div>12121212</div>
</template>

<script>
export default {
  name: "Track",
};
</script>

<style scoped>
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
  -webkit-animation: blink 1s infinite linear; /*Safari and Chrome*/
}

@keyframes blink {
  0% {
    background-color: rgba(255, 16, 0, 0);
  }

  50% {
    background-color: rgba(255, 0, 255, 0.911);
  }

  100% {
    background-color: rgba(255, 17, 0, 0.911);
  }
}

@keyframes mymove {
  from {
    left: 0px;
  }
  to {
    left: 200px;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  from {
    left: 0px;
  }
  to {
    left: 200px;
  }
}
</style>