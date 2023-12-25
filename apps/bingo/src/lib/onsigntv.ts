// @ts-nocheck
export function alertSignage() {
  if (window.signageLoaded !== undefined) {
    window.signageLoaded.then(function () {
      alert(JSON.stringify(signage.playbackInfo()))
    })
  }else {
    alert("No signageLoaded on window object")
  }
}
