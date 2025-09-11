<template>
  <!-- Social links -->
  <div
    class="mt-2 social-links flex justify-center max-w-[400px] mx-auto items-center sm:gap-x-12 gap-x-6 gap-y-6 flex-wrap"
  >
    <NuxtLink
      v-if="social?.email"
      :href="`mailto:${social?.email}`"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-solid fa-envelope text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>
      <h5 class="universal-text">Email</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.phone_number"
      :href="`tel:${social?.phone_number}`"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-solid fa-phone text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Call</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.calendar"
      :href="social?.calendar"
      target="_blank"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-regular fa-calendar text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Calendar</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.greeting_text"
      :href="`sms:?&body=${
        social?.greeting_text
          ? social?.greeting_text
          : 'Hello! Visit the website: ' + siteUrl
      }`"
      :class="{ hidden: !social?.phone_number }"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-regular fa-handshake text-2xl bg-hoverColor hover:bg-primary text-black hover:text-white transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Connect</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.linked_in"
      :href="social?.linked_in"
      target="_blank"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-brands fa-linkedin-in text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Linkedin</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.instagram"
      :href="social?.instagram"
      target="_blank"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-brands fa-instagram text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Instagram</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.youtube"
      :href="social?.youtube"
      target="_blank"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-brands fa-youtube text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Youtube</h5>
    </NuxtLink>
    <!-- :class="{ 'hidden': !social?.telegram }" -->

    <NuxtLink
      v-if="social?.telegram"
      :href="social?.telegram"
      target="_blank"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-brands fa-telegram text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Telegram</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.buttons"
      v-for="button in social?.buttons"
      
      :key="button.id"
      :href="button?.url"
      target="_blank"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <img
        v-if="button?.image"
        class="w-14 h-14 rounded-full object-cover"
        :src="button?.image"
        :alt="button?.text + ' image'"
      />
      <i
        v-else
        class="fa-solid fa-link text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>
      <h5>{{ button?.text }}</h5>
    </NuxtLink>

    <NuxtLink
      v-if="social?.whatsapp"
      :href="`https://wa.me/${social?.whatsapp}`"
      target="_blank"
      class="flex flex-col gap-3 items-center cursor-pointer"
    >
      <i
        class="fa-brands fa-whatsapp text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"
      ></i>

      <h5 class="universal-text">Whatsapp</h5>
    </NuxtLink>
  </div>

  <!-- <div class="flex justify-evenly sm:gap-8 gap-6 items-center mt-8 flex-wrap">
        
    </div> -->

  <div class="mt-8">
    <div class="flex gap-[2px] mb-5">
      <NuxtLink
        target="_blank"
        :href="
          social?.contact_file !== null
            ? social?.contact_file
            : `tel:${social?.phone_number}`
        "
        class="btn w-[70%] rounded-r-none bg-hoverColor hover:bg-primary"
      >
        <i class="fa-solid fa-address-book"></i> ADD TO CONTACTS
      </NuxtLink>

      <button @click="toggleCard" class="btn w-[40%] rounded-l-none">
        <i class="fa-solid fa-share-nodes"></i>
        SHARE
      </button>
    </div>

    <NuxtLink :href="social?.company_url" target="_blank" class="btn">
      Website
    </NuxtLink>
  </div>
</template>

<script setup>
let siteUrl = "";

// Stores
const appStore = useAppStore();
const profileStore = useProfileStore();
// Actions
const { toggleCard } = appStore;
// Refs
const { profileData: social } = storeToRefs(profileStore);

onMounted(() => {
  siteUrl = window.location.href;
});
</script>

<style scoped>
.social-links a {
  @apply w-[60px] whitespace-nowrap;
}
</style>
