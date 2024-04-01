<template>
  <!-- <teleport to="head title">Tailwindcss</teleport> -->
  <teleport to="head">
    <link
      rel="icon"
      class="js-site-favicon"
      type="image/svg+xml"
      href="https://github.githubassets.com/favicons/favicon-dark.svg"
    />
  </teleport>
  <header class="flex flex-col bg-gray-100 border-b-[1.5px] border-gray-300">
    <!-- Top navigation -->
    <nav class="flex justify-between p-4 pb-2 text-sm">
      <!-- Left section -->
      <div class="flex gap-2">
        <button class="border border-gray-300 px-[7px] rounded text-gray-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
            class="fill-current w-4 h-4"
          >
            <path
              d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
            ></path>
          </svg>
        </button>
        <a href="#" title="icon" class="ml-2">
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            class="octicon octicon-mark-github v-align-middle color-fg-default"
          >
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
            ></path>
          </svg>
        </a>
        <ul class="flex items-center">
          <li>
            <a href="#" class="px-2 py-1.5 rounded hover:bg-[#d0d7de33]">tailwindlabs</a>
            <span class="seperator">/</span>
          </li>
          <li>
            <a href="#" class="px-2 py-1.5 rounded hover:bg-[#d0d7de33] font-semibold"
              >tailwindcss</a
            >
          </li>
        </ul>
      </div>
      <!-- Right section -->
      <div class="flex justify-between items-center">
        <div
          class="relative border rounded-md border-gray-300 text-gray-600 items-center flex w-[350px] group hover:cursor-pointer h-full"
        >
          <button class="absolute left-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-view-component="true"
              class="fill-current w-4 h-4"
            >
              <path
                d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
              ></path>
            </svg>
          </button>
          <span class="absolute left-8"
            >Type <small class="border px-[3px] border-gray-600 rounded">/</small> to search</span
          >
          <button
            class="absolute right-2 before:content-['|'] before:col-span-1 before:-ml-2 before:w-1 before:bg-gray-100 grid grid-cols-3 items-center hover:bg-gray-200 rounded"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              class="w-4 h-4 fill-current col-span-2 -ml-1"
            >
              <path
                d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex space-x-2 ml-2 items-center">
          <span class="text-gray-300">|</span>
          <button
            class="flex px-3 border border-gray-300 rounded space-x-2 h-8 items-center text-gray-600 group hover:bg-gray-200"
          >
            <span>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="fill-current"
              >
                <path
                  d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="fill-current"
              >
                <path
                  d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                ></path>
              </svg>
            </span>
          </button>
          <button
            class="px-2 border border-gray-300 rounded items-center text-gray-600 hover:bg-gray-200 h-8"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-view-component="true"
              class="w-4 h-4 fill-current"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              <path
                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
              ></path>
            </svg>
          </button>
          <button
            class="px-2 border border-gray-300 rounded items-center text-gray-600 hover:bg-gray-200 h-8"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-view-component="true"
              class="w-4 h-4 fill-current"
            >
              <path
                d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
              ></path>
            </svg>
          </button>
          <button
            class="px-2 border border-gray-300 rounded items-center text-gray-600 hover:bg-gray-200 h-8"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-view-component="true"
              class="w-4 h-4 fill-current"
            >
              <path
                d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
              ></path>
            </svg>
          </button>
          <button>
            <img src="https://i.pravatar.cc/32?img=24" class="rounded-full w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
    <!-- Top navigation ends -->
    <div class="repo-nav px-4">
      <nav class="min-h-8">
        <ul class="flex gap-2 items-center text-sm text-gray-600 min-h-12">
          <li class="inline-flex">
            <a
              href="#"
              class="items-center flex gap-2 px-2 hover:bg-gray-200/60 rounded py-1 relative after:border after:border-orange-400 after:absolute after:w-full after:-bottom-[11px] after:left-0 after:rounded"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current inline-flex"
              >
                <path
                  d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
                ></path>
              </svg>
              <span class="inline-flex font-semibold text-gray-800">Code</span>
            </a>
          </li>
          <li class="inline-flex">
            <a href="#" class="items-center flex gap-2 px-2 hover:bg-gray-200/60 rounded py-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current inline-flex"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
                ></path>
              </svg>
              <span class="inline-flex text-gray-800">Issues</span>
              <span
                class="bg-gray-300/50 py-0.5 text-gray-700 px-1.5 font-bold rounded-full text-xs"
                >16</span
              >
            </a>
          </li>
          <li class="inline-flex">
            <a href="#" class="items-center flex gap-2 px-2 hover:bg-gray-200/60 rounded py-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current inline-flex"
              >
                <path
                  d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
                ></path>
              </svg>
              <span class="inline-flex text-gray-800">Pull requests</span>
              <span
                class="bg-gray-300/50 py-0.5 text-gray-700 px-1.5 font-bold rounded-full text-xs"
                >13</span
              >
            </a>
          </li>
          <li class="inline-flex">
            <a href="#" class="items-center flex gap-2 px-2 hover:bg-gray-200/60 rounded py-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current inline-flex"
              >
                <path
                  d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"
                ></path>
              </svg>
              <span class="inline-flex text-gray-800">Discussions</span>
            </a>
          </li>
          <li class="inline-flex">
            <a href="#" class="items-center flex gap-2 px-2 hover:bg-gray-200/60 rounded py-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current inline-flex"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"
                ></path>
              </svg>
              <span class="inline-flex text-gray-800">Actions</span>
            </a>
          </li>
          <li class="inline-flex">
            <a href="#" class="items-center flex gap-2 px-2 hover:bg-gray-200/60 rounded py-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current inline-flex"
              >
                <path
                  d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                ></path>
              </svg>
              <span class="inline-flex text-gray-800">Security</span>
            </a>
          </li>
          <li class="inline-flex">
            <a href="#" class="items-center flex gap-2 px-2 hover:bg-gray-200/60 rounded py-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current inline-flex"
              >
                <path
                  d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"
                ></path>
              </svg>
              <span class="inline-flex text-gray-800">Insights</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div id="repoContainer">
    <!-- Repo container header -->
    <div id="repoHeaderContainer" class="pt-3">
      <div
        id="repoHeader"
        class="container mx-auto px-3 flex mb-3 lg:px-8 items-center justify-between"
      >
        <div class="flex space-x-2 items-center">
          <img
            class="w-6 h-6 border border-gray-200 rounded"
            alt="Owner avatar"
            src="https://avatars.githubusercontent.com/u/67109815?s=48&amp;v=4"
            width="24"
            height="24"
          />
          <a href="#" class="text-xl font-semibold hover:underline"> tailwindcss </a>
          <span class="border rounded-full text-xs font-semibold px-2 py-0.5">Public</span>
        </div>
        <div id="repoDetailsContainer">
          <ul class="text-[12px] font-semibold text-gray-600 flex gap-2">
            <li>
              <button
                class="flex space-x-1 border border-gray-300 bg-gray-100/40 hover:bg-gray-100 px-2 py-1 rounded-lg"
              >
                <span class="flex items-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="w-4 h-4 fill-current mr-1"
                  >
                    <path
                      d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"
                    ></path>
                  </svg>
                  Watch
                </span>
                <span class="rounded-full bg-gray-200 px-1.5">606</span>
                <span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 h-4"
                  >
                    <path
                      d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button
                class="flex space-x-3 border border-gray-300 bg-gray-100/40 hover:bg-gray-100 px-2 rounded-lg"
              >
                <span class="flex items-center py-1">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="w-4 h-4 fill-current mr-1"
                  >
                    <path
                      d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                    ></path>
                  </svg>
                  Fork
                </span>
                <span class="rounded-full bg-gray-200 px-1.5 my-auto">3.9k</span>
                <span class="border-l-2 py-[5px] pl-1">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 h-4"
                  >
                    <path
                      d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button
                class="flex space-x-3 border border-gray-300 bg-gray-100/40 hover:bg-gray-100 px-2 rounded-lg"
              >
                <span class="flex items-center py-1">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="w-4 h-4 fill-current mr-1"
                  >
                    <path
                      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                    ></path>
                  </svg>
                  Star
                </span>
                <span class="rounded-full bg-gray-200 px-1.5 my-auto">77.7k</span>
                <span class="border-l-2 py-[5px] pl-1">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 h-4"
                  >
                    <path
                      d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- Repo line breaker -->
      <div class="container mx-auto">
        <div class="border-b mx-8"></div>
      </div>
      <!-- Repo line breaker ends -->
    </div>
    <!-- Repo container header ends -->
    <!-- Repo content container -->
    <div id="repoContentContainer">
      <div
        id="repoHeader"
        class="container mx-auto px-3 flex mb-3 lg:px-8 items-center justify-between"
      >
        <!-- main content -->
        <div class="flex justify-between w-full text-sm font-semibold text-gray-600">
          <div id="layoutMain" class="w-3/4 mr-8">
            <div class="mt-4" id="rhcH">
              <div class="pt-2 pb-4 flex justify-between">
                <!--Left branch nav starts -->
                <div class="flex gap-2">
                  <div>
                    <button
                      class="flex space-x-2 border border-gray-300 bg-gray-100/40 items-center hover:bg-gray-100 px-4 py-1.5 rounded-lg"
                    >
                      <span class="flex items-center">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          data-view-component="true"
                          class="w-4 h-4 fill-current mr-1"
                        >
                          <path
                            d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
                          ></path>
                        </svg>
                        next
                      </span>
                      <span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          data-view-component="true"
                          class="fill-current w-4 h-4"
                        >
                          <path
                            d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="flex">
                    <button
                      class="flex space-x-2 items-center hover:bg-gray-100 px-1.5 py-1.5 rounded-lg"
                    >
                      <span class="flex items-center">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          data-view-component="true"
                          class="w-4 h-4 fill-current mr-1"
                        >
                          <path
                            d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
                          ></path>
                        </svg>
                        29 Branches
                      </span>
                    </button>
                    <button
                      class="flex space-x-2 items-center hover:bg-gray-100 px-1.5 py-1.5 rounded-lg"
                    >
                      <span class="flex items-center">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          data-view-component="true"
                          class="w-4 h-4 fill-current mr-1"
                        >
                          <path
                            d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                          ></path>
                        </svg>
                        240 Tags
                      </span>
                    </button>
                  </div>
                </div>
                <!--Left branch nav ends -->
                <!--Right branch nav section -->
                <div class="flex gap-2">
                  <div class="flex gap-2">
                    <div
                      class="border flex gap-2 items-center px-3 rounded-md search-bar group focus-within:outline-2 focus-within:ring-2 focus-within:ring-blue-600"
                    >
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="fill-current w-4 h-4"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
                          ></path>
                        </svg>
                      </span>
                      <input
                        type="text"
                        id="fileSearch"
                        class="w-full font-normal text-gray-600 placeholder:text-gray-600 outline-none"
                        placeholder="Go to file"
                      />
                      <span>
                        <small
                          class="px-1.5 text-sm border rounded-md -mr-1.5 font-normal bg-gray-100"
                          >t</small
                        >
                      </span>
                    </div>
                    <button
                      class="flex space-x-2 border border-gray-300 bg-gray-100/40 items-center hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                    >
                      <span>Add file</span>
                      <span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          data-view-component="true"
                          class="fill-current w-4 h-4"
                        >
                          <path
                            d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <button
                    class="flex space-x-2 items-center hover:bg-[#1c8139] px-3 py-1.5 rounded-lg bg-[#1f883d] text-white"
                  >
                    <span class="flex items-center">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-view-component="true"
                        class="w-4 h-4 fill-current mr-1"
                      >
                        <path
                          d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
                        ></path>
                      </svg>
                      Code
                    </span>
                    <span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-view-component="true"
                        class="fill-current w-4 h-4"
                      >
                        <path
                          d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <!--Right branch nav section -->
              </div>
            </div>

            <!-- commits-container starts -->
            <div class="rounded-md border">
              <table class="w-full font-normal">
                <tbody>
                  <tr class="bg-[#f6f8fa] h-10 border-b">
                    <td class="p-1" colspan="3">
                      <div class="p-2 pl-4 flex items-center justify-between gap-2">
                        <div class="flex gap-2 items-center grow">
                          <div class="flex">
                            <a href="#">
                              <img
                                alt="adamwathan"
                                size="20"
                                src="https://avatars.githubusercontent.com/u/4323180?v=4&amp;size=40"
                                data-testid="github-avatar"
                                aria-label="adamwathan"
                                height="20"
                                width="20"
                                class="w-5 h-5 rounded-full mr-2"
                              />
                            </a>
                            <a href="#" class="font-semibold">adamwathan</a>
                          </div>
                          <div class="flex gap-2 items-center">
                            <div>
                              <span>
                                <a href="#">Don't reset ::first-letter in Preflight (</a>
                                <a href="#" class="text-blue-600 hover:underline">#13408</a>
                                <a href="#">)</a>
                              </span>
                            </div>
                            <button class="hover:bg-gray-200/60 w-7 h-7 rounded">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                role="img"
                                class="w-4 h-4 fill-current mx-auto"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                                ></path>
                              </svg>
                            </button>
                            <span class="mr-2 relative inline-block">
                              <button class="w-7 h-7">
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  role="img"
                                  class="w-4 h-4 fill-current"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                                  ></path>
                                </svg>
                              </button>
                            </span>
                          </div>
                        </div>
                        <div class="flex items-center text-xs">
                          <span>
                            <a href="#" class="hover:underline hover:text-blue-600">4aefd26</a>
                            &nbsp;·&nbsp;
                            <span>yesterday</span>
                          </span>
                        </div>
                        <div class="flex gap-2">
                          <a
                            href="#"
                            class="flex px-2 hover:bg-[#d0d7de33] h-7 items-center rounded"
                          >
                            <span class="mr-1">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                role="img"
                                class="w-4 h-4 fill-current"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"
                                ></path>
                              </svg>
                            </span>
                            <span class="text-xs font-semibold"> 5,318 Commits </span>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-[#54aeff]"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">.github</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline"
                            >Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-[#54aeff]"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">crates</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline"
                            >Prepare next release: 4.0.0-alpha.11 (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">5 days ago</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-[#54aeff]"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">packages</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline"
                            >Correct repository fields in package.json files (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13416</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">14 hours ago</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-[#54aeff]"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">playgrounds</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline"
                            >Use Vite waitForRequestsIdle (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">2 weeks ago</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-[#54aeff]"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">scripts</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">.gitignore</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">.npmrc</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            introduce v4 codebase</a
                          >
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last month</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">.prettierignore</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">CHANGELOG.md</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Don't reset ::first-letter in Preflight (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">2 days ago</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">Cargo.lock</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            remove Rust benchmarks and fixtures (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">Cargo.toml</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">LICENSE</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Add README, LICENSE, and CONTRIBUTING (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last month</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">README.md</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Copy README file to every package (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13096</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last month</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">package.json</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">pnpm-lock.yaml</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline"
                          >pnpm-workspace.yaml</a
                        >
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            Hoist oxide/crates to just crates (</a
                          >
                          <a href="#" class="text-blue-600 hover:underline">#13333</a>
                          <a href="#" class="hover:text-blue-600 hover:underline">)</a>
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last week</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline">turbo.json</a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            introduce v4 codebase</a
                          >
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last month</div></td>
                  </tr>
                  <tr class="hover:bg-[#f6f8fa] h-10 border-b">
                    <td class="pl-4 min-w-[210px]" colspan="1">
                      <div class="pr-4 flex items-center gap-2.5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          class="icon-directory w-4 h-4 fill-current"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                          ></path>
                        </svg>
                        <a href="#" class="hover:text-[#0969da] hover:underline"
                          >vitest.workspace.ts</a
                        >
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <a href="#" class="hover:text-blue-600 hover:underline">
                            introduce v4 codebase</a
                          >
                        </span>
                      </div>
                    </td>
                    <td class="pr-4"><div class="text-right">last month</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- commits-container ends -->

            <!-- readme-container starts -->
            <div class="rounded-md border font-normal h-50 mt-4 mb-6">
              <div class="flex flex-col relative">
                <div class="h-12 border-b flex pr-2 sticky top-0 items-center bg-white">
                  <nav class="flex px-2 justify-start items-center w-full">
                    <ul class="flex gap-2">
                      <li class="flex items-center">
                        <a
                          href="#"
                          class="relative inline-flex items-center text-center px-2 hover:bg-[#afb8c133] rounded py-1 after:border after:border-orange-400 after:absolute after:w-full after:-bottom-2.5 after:left-0 after:rounded"
                        >
                          <span class="mr-2 inline-flex">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              role="img"
                              class="w-4 h-4 fill-current"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"
                              ></path>
                            </svg>
                          </span>
                          <span class="font-semibold">README</span>
                        </a>
                      </li>
                      <li class="flex items-center">
                        <a
                          href="#"
                          class="inline-flex items-center text-center px-2 hover:bg-[#afb8c133] rounded py-1"
                        >
                          <span class="mr-2 inline-flex">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              role="img"
                              class="w-4 h-4 fill-current"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"
                              ></path>
                            </svg>
                          </span>
                          <span>MIT license</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <button class="px-1.5 hover:bg-[#afb8c133] rounded py-1 mr-2">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      class="w-4 h-4 fill-current"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
                      ></path>
                    </svg>
                  </button>
                  <button class="px-1.5 hover:bg-[#afb8c133] rounded py-1">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      class="w-4 h-4 fill-current"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="overflow-auto p-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque rem esse,
                  praesentium exercitationem earum sit aspernatur corporis assumenda non voluptate
                  itaque nostrum nesciunt tempora at odit, similique facilis quos. Itaque maiores
                  laborum modi culpa dignissimos fugiat aliquid atque. Perspiciatis labore, ullam
                  velit doloremque laboriosam recusandae aspernatur facere distinctio vitae ab
                  inventore pariatur placeat aliquam saepe temporibus, ipsam dicta quaerat eum nam,
                  soluta debitis veritatis odit. Velit nostrum, repudiandae corporis earum nisi
                  dignissimos omnis itaque rerum perferendis voluptates veritatis, reiciendis modi.
                  Incidunt officiis aspernatur dolor soluta libero ad dignissimos quo tempora ex
                  culpa eos id similique alias, voluptatum aut facilis?
                </div>
              </div>
            </div>
            <!-- readme-container ends -->
          </div>
          <div id="layoutSidebar" class="w-1/4 font-normal">
            <div class="mt-3">
              <!-- First row -->
              <div class="grid-row">
                <div class="py-4">
                  <div class="hidden lg:block text-base">
                    <h2 class="mb-3 font-semibold">About</h2>
                    <p class="my-4">A utility-first CSS framework for rapid UI development.</p>
                    <div class="my-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-view-component="true"
                        class="flex-shrink-0 mr-2 w-4 h-4"
                      >
                        <path
                          d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"
                        ></path>
                      </svg>
                      <span>
                        <a href="#" class="font-semibold text-sm text-blue-600 hover:underline"
                          >tailwindcss.com/</a
                        >
                      </span>
                    </div>
                    <!-- Tags -->
                    <div class="my-4">
                      <div class="text-xs">
                        <a
                          href="#"
                          class="rounded-full bg-[#ddf4ff] py-1 text-blue-600 px-3 font-semibold hover:bg-[#0969da] hover:text-white inline-block mr-0.5 mb-1"
                          >css</a
                        >
                        <a
                          href="#"
                          class="rounded-full bg-[#ddf4ff] py-1 text-blue-600 px-3 font-semibold hover:bg-[#0969da] hover:text-white inline-block mr-0.5 mb-1"
                          >postcss</a
                        >
                        <a
                          href="#"
                          class="rounded-full bg-[#ddf4ff] py-1 text-blue-600 px-3 font-semibold hover:bg-[#0969da] hover:text-white inline-block mr-0.5 mb-1"
                          >responsive</a
                        >
                        <a
                          href="#"
                          class="rounded-full bg-[#ddf4ff] py-1 text-blue-600 px-3 font-semibold hover:bg-[#0969da] hover:text-white inline-block mr-0.5 mb-1"
                          >css-framework</a
                        >
                        <a
                          href="#"
                          class="rounded-full bg-[#ddf4ff] py-1 text-blue-600 px-3 font-semibold hover:bg-[#0969da] hover:text-white inline-block mr-0.5 mb-1"
                          >functional-css</a
                        >
                        <a
                          href="#"
                          class="rounded-full bg-[#ddf4ff] py-1 text-blue-600 px-3 font-semibold hover:bg-[#0969da] hover:text-white inline-block mr-0.5 mb-1"
                          >utility-classes</a
                        >
                        <a
                          href="#"
                          class="rounded-full bg-[#ddf4ff] py-1 text-blue-600 px-3 font-semibold hover:bg-[#0969da] hover:text-white inline-block mr-0.5 mb-1"
                          >tailwindcss</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- First row ends -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="text-xs pt-16 pb-10 px-4 text-[#636c76]">
      <div class="flex items-center justify-center">
        <div class="flex mx-2 items-center">
          <a href="#">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              class="fill-current w-6 h-6 mr-2"
            >
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              ></path>
            </svg>
          </a>
          <span>&copy; 2024 GitHub, Inc.</span>
        </div>
        <nav id="footerNav" class="">
          <ul class="flex items-center mb-2 lg:mb-0">
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline">Terms</a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline">Privacy</a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline">Security</a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline">Status</a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline">Docs</a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline">Contact</a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline">Manage cookies</a>
            </li>
            <li class="mx-2">
              <a href="#" class="hover:text-blue-600 hover:underline"
                >Do not share my personal information</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>
