import React from "react";
import Register from "../Register";

const App = () => {
  return (
    <>
      <nav
        className="sticky top-[1rem] z-30 navbar bg-base-300 rounded-box bg-opacity-60 mt-[1rem] backdrop-blur transition-all duration-100 
  bg-base-100 text-base-content shadow-sm w-11/12 mx-auto"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
              <li>
                <a>Register</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Instruo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Sponsors</a>
            </li>
            <li tabIndex={0}>
              <a>
                Events
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <a className="btn btn-outline btn-primary mx-2">Sign In</a>
          <a className="btn btn-primary mx-2">Register</a>
        </div>
      </nav>
      <div
        className="hero min-h-screen -mt-[5rem]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Instruo 2k22</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center m-5">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 35 }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="btn btn-primary">View Events</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
        <div className="hero-content px-4 md:px-0 text-center">
          <div>
            <h2 className="mt-32 mb-32 text-5xl font-extrabold md:text-6xl">
              About Us
            </h2>
            <div className="mt-10 mb-20 flex flex-col lg:flex-row justify-evenly">
              <img
                src="https://images.pexels.com/photos/13268789/pexels-photo-13268789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex lg:w-1/2 flex-col text-left">
                <p className="py-8">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptate, ratione vitae!
                  Repellendus voluptate eaque nesciunt cum, eius omnis ea, aut
                  aspernatur voluptates dolores illo? Eum nemo debitis minima.
                  Impedit, fuga. Aut, doloremque reprehenderit itaque fuga modi
                  voluptas eos quam ut ipsum magnam magni molestias quaerat quia
                  nisi veritatis nam aliquam error qui quis amet maiores odit
                  cupiditate doloribus! Maxime, recusandae.
                </p>
              </div>
            </div>
            <div className="mt-10 mb-20 flex flex-col lg:flex-row-reverse justify-evenly">
              <img
                src="https://images.pexels.com/photos/13268789/pexels-photo-13268789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex lg:w-1/2 flex-col text-left">
                <p className="py-8">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptate, ratione vitae!
                  Repellendus voluptate eaque nesciunt cum, eius omnis ea, aut
                  aspernatur voluptates dolores illo? Eum nemo debitis minima.
                  Impedit, fuga. Aut, doloremque reprehenderit itaque fuga modi
                  voluptas eos quam ut ipsum magnam magni molestias quaerat quia
                  nisi veritatis nam aliquam error qui quis amet maiores odit
                  cupiditate doloribus! Maxime, recusandae.
                </p>
              </div>
            </div>
            <div className="mt-10 mb-20 flex flex-col lg:flex-row justify-evenly">
              <img
                src="https://images.pexels.com/photos/13268789/pexels-photo-13268789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex lg:w-1/2 flex-col text-left">
                <p className="py-8">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptate, ratione vitae!
                  Repellendus voluptate eaque nesciunt cum, eius omnis ea, aut
                  aspernatur voluptates dolores illo? Eum nemo debitis minima.
                  Impedit, fuga. Aut, doloremque reprehenderit itaque fuga modi
                  voluptas eos quam ut ipsum magnam magni molestias quaerat quia
                  nisi veritatis nam aliquam error qui quis amet maiores odit
                  cupiditate doloribus! Maxime, recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-200 flex flex-col items-center gap-20 py-20">
        <div className="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0">
          <div class="px-2 pt-2">
            <div class="navbar text-primary-content rounded-box space-x-1">
              <div class="hidden flex-none md:flex">
                <div class="dropdown">
                  <div tabindex="0">
                    <button
                      aria-label="drawer component"
                      class="btn btn-ghost mask mask-squircle btn-square focus:bg-base-content border-none focus:bg-opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-6 w-6 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          drawer component
                        </h2>
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Drawer component is useful for opening a sidebar menu
                        </p>
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/drawer"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mx-2 flex-1 justify-center px-2 md:flex md:justify-start">
                <span class="text-2xl font-bold">Components Preview</span>
              </div>
              <div class="hidden flex-1 md:flex md:flex-none">
                <div class="form-control">
                  <div class="dropdown">
                    <div tabindex="0">
                      <input
                        placeholder="Text Input"
                        class="input input-ghost input-bordered text-primary-content placeholder-primary-content focus:text-primary-content rounded-full focus:bg-transparent"
                      />
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            text input component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            Text input comes in various sizes and styles
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/input"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="dropdown dropdown-left">
                <div tabindex="0">
                  <button
                    aria-label="button component"
                    class="btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        navbar component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        You'll need a navbar on top of your page
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/navbar"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="dropdown dropdown-left">
                <div tabindex="0">
                  <button
                    aria-label="button component"
                    class="btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </button>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        navbar component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        You'll need a navbar on top of your page
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/navbar"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="dropdown dropdown-left">
                <div tabindex="0">
                  <button
                    aria-label="navbar component"
                    class="btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex"
                  >
                    <div class="avatar">
                      <div class="mask mask-squircle h-10 w-10">
                        <img
                          src="/tailwind-css-component-profile-1@40w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </button>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        avatar component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Use avatar component with any size
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/avatar"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="component-demo"
            class="flex w-full grid-flow-row grid-cols-12 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4 svelte-1n6ue57"
          >
            <div class="bg-base-100 rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full svelte-1n6ue57">
              <div class="dropdown">
                <div tabindex="0">
                  <div class="online avatar">
                    <div class="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px">
                      <img
                        src="/tailwind-css-component-profile-1@94w.jpg"
                        width="94"
                        height="94"
                        alt="Avatar Tailwind CSS Component"
                        class="mask mask-squircle"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        avatar component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Use avatar component with any size
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/avatar"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div>
                <div class="dropdown w-full">
                  <div tabindex="0">
                    <div class="text-center">
                      <div class="text-lg font-extrabold">Betsy Braddock</div>{" "}
                      <div class="text-base-content/70 my-3 text-sm">
                        Strategic Art Manager
                        <br />
                        Global Illustration Observer
                        <br />
                        Business Alignment Developer
                      </div>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          card component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Card component is used to show products, features and
                          more.
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/card"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="dropdown w-full">
                  <div tabindex="0">
                    <div class="mt-2 text-center">
                      <div class="badge badge-ghost">Design</div>{" "}
                      <div class="badge badge-ghost">Art</div>{" "}
                      <div class="badge badge-ghost">Illustration</div>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          badge component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Use badge component to highlight small inline items
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/badge"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="dropdown dropdown-top">
                <div tabindex="0">
                  <div class="btn-group">
                    <button class="btn btn-accent btn-sm">Follow</button>{" "}
                    <button
                      aria-label="button component"
                      class="btn btn-accent btn-square btn-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="h-6 w-6 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        button group component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Use it to group multiple buttons together
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/button-group"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="bg-base-100 rounded-box col-span-3 row-span-3 mx-2 flex w-72 flex-shrink-0 flex-col justify-center gap-4 p-4 shadow-xl xl:mx-0 xl:w-full svelte-1n6ue57">
              <div class="px-6 pt-6">
                <div class="text-xl font-extrabold">Superpower settings</div>{" "}
                <div class="text-base-content/70 my-4 text-xs">
                  Enable your favorite superpowers. Terms and conditions apply
                </div>{" "}
                <div class="dropdown w-full flex-1">
                  <div tabindex="0">
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Enable teleportation</span>{" "}
                        <input type="checkbox" class="toggle toggle-primary" />
                      </label>
                    </div>{" "}
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Enable time travel</span>{" "}
                        <input
                          type="checkbox"
                          class="toggle toggle-secondary"
                        />
                      </label>
                    </div>{" "}
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Enable laser eyes</span>{" "}
                        <input type="checkbox" class="toggle toggle-accent" />
                      </label>
                    </div>{" "}
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Enable immortality</span>{" "}
                        <input type="checkbox" class="toggle" />
                      </label>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          toggle component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Use toggle to switch between two states
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/toggle"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="form-control">
                <div class="dropdown dropdown-top dropdown-end">
                  <div tabindex="0">
                    <button class="btn btn-secondary btn-block space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="h-6 w-6 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>{" "}
                      <span>Apply settings</span>
                    </button>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          button component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Buttons come in various shapes, colors and sizes
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/button"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="card card-compact xl:card-normal bg-base-100 col-span-3 row-span-4 mx-2 w-72 flex-shrink-0 overflow-visible shadow-xl xl:mx-0 xl:w-auto svelte-1n6ue57">
              <div class="dropdown">
                <div tabindex="0">
                  <figure>
                    <img
                      src="/tailwind-css-component-card-1.jpg"
                      width="300"
                      height="187"
                      alt="Card Tailwind CSS Component"
                      class="rounded-t-box"
                    />
                  </figure>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        card component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Card component is used to show products, features and
                        more.
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/card"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="card-body">
                <div class="card-title flex items-center font-extrabold">
                  Card Component
                  <div class="dropdown dropdown-top dropdown-end">
                    <div tabindex="0">
                      <div
                        tabindex="0"
                        class="btn btn-ghost text-info btn-xs btn-circle mx-1 inline-block"
                      >
                        <svg
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="inline h-5 w-5 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            dropdown component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            helper dropdown can show an element when focused.
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/dropdown"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="dropdown w-full">
                  <div tabindex="0">
                    <div class="mb-2">
                      <div class="badge badge-ghost">May 14th</div>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          badge component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Use badge component to highlight small inline items
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/badge"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <p class="text-base-content text-sm text-opacity-80">
                  Use card component to easily show blog posts, products,
                  features, items and more.
                </p>{" "}
                <div class="card-actions justify-end">
                  <div class="dropdown dropdown-top dropdown-end">
                    <div tabindex="0">
                      <button class="btn btn-primary">Get Started</button>
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            button component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            Buttons come in various shapes, colors and sizes
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/button"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col-span-3 row-span-3 mx-2 flex w-72 flex-shrink-0 flex-col xl:mx-0 xl:w-full svelte-1n6ue57">
              <div class="dropdown">
                <div tabindex="0" class="bg-opacity-100">
                  <div class="tabs w-full flex-grow-0">
                    <button class="tab tab-lifted tab-active tab-border-none tab-lg flex-1">
                      Stats
                    </button>{" "}
                    <button class="tab tab-lifted tab-border-none tab-lg flex-1">
                      Info
                    </button>{" "}
                    <button class="tab tab-lifted tab-border-none tab-lg flex-1">
                      Options
                    </button>
                  </div>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        tab component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Beautiful tabs to switch between sections
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/tab"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl">
                <div class="flex items-center space-x-2">
                  <div class="dropdown">
                    <div tabindex="0">
                      <div class="online avatar">
                        <div class="mask mask-hexagon bg-base-content h-16 w-16 bg-opacity-10 p-px">
                          <img
                            src="/tailwind-css-component-profile-5@56w.png"
                            alt="Avatar Tailwind CSS Component"
                            class="mask mask-hexagon"
                          />
                        </div>
                      </div>
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            avatar component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            Use avatar component with any size
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/avatar"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div>
                    <div class="text-lg font-extrabold">Beatrice Thurman</div>{" "}
                    <div class="text-base-content/70 text-sm">
                      220 Followers
                    </div>
                  </div>
                </div>{" "}
                <div class="dropdown">
                  <div tabindex="0">
                    <div class="divider text-base-content/60 m-0">Reports</div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          divider component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          User divider component to visually separate items
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/divider"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="text-lg font-extrabold">Audience Report</div>{" "}
                <div class="grid gap-3">
                  <div class="dropdown dropdown-top">
                    <div tabindex="0">
                      <div class="flex items-center p-1">
                        <span class="text-base-content/70 w-48 text-xs">
                          Search Engines
                        </span>{" "}
                        <progress
                          max="100"
                          class="progress progress-success"
                          value="50"
                        ></progress>
                      </div>{" "}
                      <div class="flex items-center p-1">
                        <span class="text-base-content/70 w-48 text-xs">
                          Direct
                        </span>{" "}
                        <progress
                          max="100"
                          class="progress progress-primary"
                          value="30"
                        ></progress>
                      </div>{" "}
                      <div class="flex items-center p-1">
                        <span class="text-base-content/70 w-48 text-xs">
                          Social Media
                        </span>{" "}
                        <progress
                          max="100"
                          class="progress progress-secondary"
                          value="70"
                        ></progress>
                      </div>{" "}
                      <div class="flex items-center p-1">
                        <span class="text-base-content/70 w-48 text-xs">
                          Emails
                        </span>{" "}
                        <progress
                          max="100"
                          class="progress progress-accent"
                          value="90"
                        ></progress>
                      </div>{" "}
                      <div class="flex items-center p-1">
                        <span class="text-base-content/70 w-48 text-xs">
                          Ad campaigns
                        </span>{" "}
                        <progress
                          max="100"
                          class="progress progress-warning"
                          value="65"
                        ></progress>
                      </div>
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            progress component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            Show progressbar, loadings or simple bar charts
                            using progress component
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/progress"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col-span-3 row-span-1 mx-2 flex w-72 flex-shrink-0 flex-col justify-center xl:mx-0 xl:w-auto svelte-1n6ue57">
              <div class="dropdown dropdown-end w-full">
                <div tabindex="0">
                  <div class="flex items-center justify-between">
                    <div class="online avatar">
                      <div class="mask mask-squircle bg-base-100 h-16 w-16 p-1">
                        <img
                          src="/tailwind-css-component-profile-3@56w.png"
                          alt="Avatar Tailwind CSS Component"
                          class="mask mask-squircle"
                        />
                      </div>
                    </div>{" "}
                    <div class="online avatar">
                      <div class="mask mask-squircle bg-base-100 h-16 w-16 p-1">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                          class="mask mask-squircle"
                        />
                      </div>
                    </div>{" "}
                    <div class="avatar offline">
                      <div class="mask mask-squircle bg-base-100 h-16 w-16 p-1">
                        <img
                          src="/tailwind-css-component-profile-4@56w.png"
                          alt="Avatar Tailwind CSS Component"
                          class="mask mask-squircle"
                        />
                      </div>
                    </div>{" "}
                    <div class="avatar">
                      <div class="mask mask-squircle bg-base-100 h-16 w-16 p-1">
                        <img
                          src="/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                          class="mask mask-squircle"
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        avatar component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Use avatar component with any size
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/avatar"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="bg-base-100 text-base-content rounded-box col-span-3 row-span-4 mx-2 grid w-72 flex-shrink-0 shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57">
              <div class="grid w-full grid-cols-1 gap-4 p-4">
                <div class="dropdown">
                  <div tabindex="0">
                    <div class="grid w-full grid-cols-2 gap-4">
                      <button class="btn btn-block">Neutral</button>{" "}
                      <button class="btn btn-primary btn-block">primary</button>{" "}
                      <button class="btn btn-secondary btn-block">
                        secondary
                      </button>{" "}
                      <button class="btn btn-accent btn-block">accent</button>{" "}
                      <button class="btn btn-info btn-block">info</button>{" "}
                      <button class="btn btn-success btn-block">success</button>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          button component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Buttons come in various shapes, colors and sizes
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/button"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="dropdown dropdown-top">
                  <div tabindex="0">
                    <div class="grid w-full grid-cols-2 gap-4">
                      <button class="btn btn-warning btn-block">warning</button>{" "}
                      <button class="btn btn-error btn-block">error</button>{" "}
                      <button class="btn btn-outline btn-block">outline</button>{" "}
                      <button class="btn btn-outline btn-primary btn-block">
                        primary
                      </button>{" "}
                      <button class="btn btn-outline btn-secondary btn-block">
                        secondary
                      </button>{" "}
                      <button class="btn btn-outline btn-accent btn-block">
                        accent
                      </button>{" "}
                      <button class="btn btn-ghost btn-block">ghost</button>{" "}
                      <button class="btn btn-link btn-block">link</button>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          button component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Buttons come in various shapes, colors and sizes
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/button"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col-span-3 row-span-2 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto svelte-1n6ue57">
              <div class="dropdown dropdown-end dropdown-top">
                <div tabindex="0">
                  <div class="grid gap-4">
                    <div class="btn-group flex">
                      <button class="btn flex-1">1</button>{" "}
                      <button class="btn btn-active flex-1">2</button>{" "}
                      <button class="btn flex-1">3</button>{" "}
                      <button class="btn flex-1">4</button>{" "}
                      <button class="btn flex-1">5</button>
                    </div>{" "}
                    <div class="btn-group flex">
                      <button class="btn btn-outline flex-1">1</button>{" "}
                      <button class="btn btn-outline flex-1">2</button>{" "}
                      <button class="btn btn-outline flex-1">3</button>{" "}
                      <button class="btn btn-outline flex-1">4</button>{" "}
                      <button class="btn btn-outline flex-1">5</button>
                    </div>
                  </div>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        pagination component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Pagination buttons in many colors and sizes!
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/pagination"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="dropdown dropdown-end dropdown-top">
                <div tabindex="0">
                  <div class="tabs tabs-boxed items-center">
                    <button class="tab flex-1">Tab 1</button>{" "}
                    <button class="tab tab-active flex-1">Tab 2</button>{" "}
                    <button class="tab flex-1">Tab 3</button>
                  </div>
                </div>{" "}
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">
                        tab component
                      </h2>{" "}
                      <p class="text-neutral-content text-sm text-opacity-80">
                        Tab component with several sizes and styles
                      </p>{" "}
                      <div class="mt-4 flex justify-end">
                        <a
                          href="/components/tab"
                          class="btn btn-primary btn-sm xl:btn-md"
                        >
                          See component
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="bg-base-100 text-base-content rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 items-stretch shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57">
              <div class="grid place-content-center gap-4 p-4">
                <div class="dropdown dropdown-end">
                  <div tabindex="0">
                    <div class="alert flex-col space-y-2">
                      <div class="flex-1">
                        <span class="mx-3 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adip!
                        </span>
                      </div>{" "}
                      <div class="flex-none">
                        <button class="btn btn-primary btn-outline btn-sm mr-2">
                          Cancel
                        </button>{" "}
                        <button class="btn btn-primary btn-sm">Apply</button>
                      </div>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          alert component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Show alerts, warnings, notification or other info
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/alert"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="dropdown dropdown-end dropdown-top">
                  <div tabindex="0">
                    <div class="alert alert-info">
                      <div class="flex-1">
                        <svg
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="mx-2 h-6 w-6 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>{" "}
                        <span class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adip!
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          alert component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Show alerts, warnings, notification or other info
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/alert"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="dropdown dropdown-end dropdown-top">
                  <div tabindex="0">
                    <div class="alert alert-success">
                      <div class="flex-1">
                        <svg
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="mx-2 h-6 w-6 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          ></path>
                        </svg>{" "}
                        <span class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adip!
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          alert component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Show alerts, warnings, notification or other info
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/alert"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col-span-3 row-span-2 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57">
              <div class="bg-base-100 text-base-content rounded-box shadow-xl">
                <div class="dropdown dropdown-end w-full">
                  <div tabindex="0">
                    <ul class="menu overflow-visible p-3">
                      <li class="menu-title">
                        <span>Menu Title</span>
                      </li>{" "}
                      <li>
                        <button>
                          <svg
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="mr-2 inline-block h-5 w-5 stroke-current"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            ></path>
                          </svg>
                          Menu Item 1
                        </button>
                      </li>{" "}
                      <li>
                        <button>
                          <svg
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="mr-2 inline-block h-5 w-5 stroke-current"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                          Menu Item 2
                        </button>
                      </li>{" "}
                      <li>
                        <button>
                          <svg
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="mr-2 inline-block h-5 w-5 stroke-current"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          Menu Item 3<div class="badge badge-success">new</div>
                        </button>
                      </li>
                    </ul>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          menu component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Use it for sidebar or any other list of items
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/menu"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col-span-3 row-span-1 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto svelte-1n6ue57">
              <div class="bg-base-100 text-base-content rounded-box shadow-xl">
                <div class="dropdown dropdown-end dropdown-top w-full">
                  <div tabindex="0">
                    <div class="flex justify-center gap-8 p-4">
                      <label aria-label="checkbox CSS component">
                        <input type="checkbox" class="checkbox" />
                      </label>{" "}
                      <label aria-label="checkbox CSS component">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                        />
                      </label>{" "}
                      <label aria-label="checkbox CSS component">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-secondary"
                        />
                      </label>{" "}
                      <label aria-label="checkbox CSS component">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-accent"
                        />
                      </label>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          checkbox component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Colorful, animated and accessible
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/checkbox"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="dropdown dropdown-end w-full">
                  <div tabindex="0">
                    <div class="rating rating-lg rating-half w-full justify-center px-4 pb-4">
                      <input
                        type="radio"
                        aria-label="Rating reset"
                        name="rating-10"
                        class="rating-hidden"
                      />{" "}
                      <input
                        type="radio"
                        aria-label="Rating half star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-1 bg-green-500"
                      />{" "}
                      <input
                        type="radio"
                        aria-label="Rating 1 star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-2 bg-green-500"
                      />{" "}
                      <div class="w-1"></div>{" "}
                      <input
                        type="radio"
                        aria-label="Rating 1 and half star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-1 bg-green-500"
                      />{" "}
                      <input
                        type="radio"
                        aria-label="Rating 2 star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-2 bg-green-500"
                      />{" "}
                      <div class="w-1"></div>{" "}
                      <input
                        type="radio"
                        aria-label="Rating 2 and half star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-1 bg-green-500"
                      />{" "}
                      <input
                        type="radio"
                        aria-label="Rating 3 star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-2 bg-green-500"
                      />{" "}
                      <div class="w-1"></div>{" "}
                      <input
                        type="radio"
                        aria-label="Rating 3 and half star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-1 bg-green-500"
                      />{" "}
                      <input
                        type="radio"
                        aria-label="Rating 4 star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-2 bg-green-500"
                      />{" "}
                      <div class="w-1"></div>{" "}
                      <input
                        type="radio"
                        aria-label="Rating 4 and half star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-1 bg-green-500"
                      />{" "}
                      <input
                        type="radio"
                        aria-label="Rating 5 star"
                        name="rating-10"
                        class="mask mask-star-2 mask-half-2 bg-green-500"
                      />
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          Rating component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Styled radio buttons
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/rating"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col-span-3 row-span-1 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto svelte-1n6ue57">
              <div class="bg-neutral text-neutral-content rounded-box flex items-center shadow-xl">
                <div class="dropdown dropdown-top">
                  <div tabindex="0">
                    <div class="breadcrumbs px-4 text-sm">
                      <ul>
                        <li>
                          <a href="/">
                            <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              class="mr-2 h-4 w-4 stroke-current"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                              ></path>
                            </svg>
                            Documents
                          </a>
                        </li>{" "}
                        <li>
                          <a href="/">
                            <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              class="mr-2 h-4 w-4 stroke-current"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                            Add Document
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                  <div tabindex="0" class="dropdown-content py-2">
                    <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                      <div class="card-body">
                        <h2 class="card-title font-extrabold capitalize">
                          breadcrumbs component
                        </h2>{" "}
                        <p class="text-neutral-content text-sm text-opacity-80">
                          Make a better navigation with breadcrumbs!
                        </p>{" "}
                        <div class="mt-4 flex justify-end">
                          <a
                            href="/components/breadcrumbs"
                            class="btn btn-primary btn-sm xl:btn-md"
                          >
                            See component
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="bg-accent text-accent-content rounded-box flex items-center p-4 shadow-xl">
                <div class="flex-1 px-2">
                  <h2 class="text-3xl font-extrabold">4,600</h2>{" "}
                  <p class="text-sm text-opacity-80">Page views</p>
                </div>{" "}
                <div class="flex-0">
                  <div class="dropdown dropdown-top dropdown-end">
                    <div tabindex="0">
                      <div class="flex space-x-1">
                        <button
                          aria-label="button component"
                          class="btn btn-ghost btn-square"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg>
                        </button>{" "}
                        <button
                          aria-label="button component"
                          class="btn btn-ghost btn-square"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            button component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            Buttons come in various shapes, colors and sizes
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/button"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="card bg-base-100 col-span-3 row-span-1 mx-2 w-72 flex-shrink-0 overflow-visible shadow-lg xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57">
              <div class="card-body flex-row items-center space-x-4 px-4">
                <div class="flex-1">
                  <h2 class="card-title mb-0 flex">
                    <div class="dropdown dropdown-top">
                      <div tabindex="0">
                        <button
                          aria-label="loading button"
                          class="btn btn-ghost loading btn-sm btn-circle"
                        ></button>
                      </div>{" "}
                      <div tabindex="0" class="dropdown-content py-2">
                        <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                          <div class="card-body">
                            <h2 class="card-title font-extrabold capitalize">
                              loading button component
                            </h2>{" "}
                            <p class="text-neutral-content text-sm text-opacity-80">
                              Buttons can get loadings state using a simple
                              class
                            </p>{" "}
                            <div class="mt-4 flex justify-end">
                              <a
                                href="/components/button"
                                class="btn btn-primary btn-sm xl:btn-md"
                              >
                                See component
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    Downloading...
                  </h2>{" "}
                  <div class="dropdown dropdown-top w-full">
                    <div tabindex="0">
                      <progress
                        max="100"
                        class="progress progress-secondary"
                        value="70"
                      ></progress>
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            progress component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            Show progressbar, loadings or simple bar charts
                            using progress component
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/progress"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="flex-0">
                  <div class="dropdown dropdown-top dropdown-end">
                    <div tabindex="0">
                      <button
                        aria-label="circle button component"
                        class="btn btn-circle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="inline-block h-6 w-6 stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>{" "}
                    <div tabindex="0" class="dropdown-content py-2">
                      <div class="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                        <div class="card-body">
                          <h2 class="card-title font-extrabold capitalize">
                            button component
                          </h2>{" "}
                          <p class="text-neutral-content text-sm text-opacity-80">
                            Buttons come in various shapes, colors and sizes
                          </p>{" "}
                          <div class="mt-4 flex justify-end">
                            <a
                              href="/components/button"
                              class="btn btn-primary btn-sm xl:btn-md"
                            >
                              See component
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Sponsors</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Instruo 2k22</p>
        </div>
      </footer>
    </>
  );
};

export default App;
