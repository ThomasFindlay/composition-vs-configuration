<template>
  <div class="slidev-layout default">
    <slot />
    <div class="grid grid-cols-2 gap-12">
      <div>
        <slot name="left" />
      </div>
      <div>
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
