<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { platform } from '@uni-helper/uni-env'

onLaunch(() => {
  console.log("App Launch");
  console.log("UNI_PLATFORM", platform);
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
