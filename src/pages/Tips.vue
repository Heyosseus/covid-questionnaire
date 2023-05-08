<template>
  <div class="py-24 px-44">
    <header class="w-full">
      <div class="flex justify-between">
        <img src="@/assets/images/LOGO.png" alt="" />
        <div class="font-monospace text-2xl font-bold">4/4</div>
      </div>
      <div class="h-0.5 w-full bg-slate-800 mt-4"></div>
    </header>

    <main class="flex justify-between">
      <form action="" class="mt-16 space-y-10 tracking-wide">
        <p class="w-[500px] tracking-wide font-xl mt-14">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
          გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის
          და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის
          მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის. <br />
          <br />
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ
          და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
        <div>
          <label for="" class="font-bold text-lg w-80"
            >რა სიხშირით შეიძლება გვქონდეს საერთო <br />
            არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
            <br />სურვილისამებრ ჩაერთვება?*</label
          >

          <div
            class="flex flex-col mt-6 space-y-1 text-lg tracking-wider w-60"
          >
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              კვირაში ორჯერ
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              კვირაში ერთხელ
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              ორ კვირაში ერთხელ
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              თვეში ერთხელ
            </label>
          </div>
        </div>
      </form>
      <img
        src="@/assets/images/bicycle.png"
        alt=""
        width="650"
        class="mt-14"
      />
    </main>
    <div class="">
      <label for="" class="font-bold text-lg w-80"
        >კვირაში რამდენი დღე ისურვებდი ოფისიდან
        <br />მუშაობას?*</label
      >
      <div
        class="flex flex-col mt-6 space-y-1 text-lg tracking-wider w-60"
      >
        <label>
          <input
            type="radio"
            name="covid-status"
            class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
          />
          0
        </label>
        <label>
          <input
            type="radio"
            name="covid-status"
            class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
          />
          1
        </label>
        <label>
          <input
            type="radio"
            name="covid-status"
            class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
          />
          2
        </label>
        <label>
          <input
            type="radio"
            name="covid-status"
            class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
          />
          3
        </label>
        <label>
          <input
            type="radio"
            name="covid-status"
            class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
          />
          4
        </label>

        <label>
          <input
            type="radio"
            name="covid-status"
            class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
          />
          5
        </label>
      </div>
    </div>
    <div class="w-[522px]">
      <div class="flex flex-col mt-12">
        <label class="font-bold">
          რას ფიქრობ ფიზიკურ შეკრებებზე?</label
        >
        <textarea class="py-12 resize-none mt-2" />
      </div>
      <div class="flex flex-col w-[522px] mt-10">
        <label class="font-bold">
          რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
          შეცვლიდი?</label
        >
        <textarea class="py-12 resize-none mt-2" />
      </div>
      <button
        class="px-6 py-3 bg-[#208298] text-white font-bold rounded-full flex align-center justify-center mt-10 ml-auto"
      >
        დასრულება
      </button>
    </div>
    <router-link :to="{ name: 'vaccine' }">
      <img
        src="@/assets/images/previous.png"
        alt=""
        class="mx-auto mt-20"
      />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
