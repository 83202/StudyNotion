import React from 'react'

const Home = ({ isLoggedIn }) => {
  return (

    <div className='flex flex-col gap-y-7'>

      <a href="/signup">
        <div class="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
          <div class="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900"><p>Become an Instructor</p>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </div>
        </div>
      </a>

      <div class="text-center text-4xl text-white font-semibold">Empower Your Future with<span class="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold"> Coding Skills</span></div>

      <div class="-mt-3 w-[80%] mx-auto text-center text-white opacity-40 text-lg text-richblack-300">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</div>

      <div class="mt-8 flex items-center justify-center mx-auto flex-row gap-7">
        <a href="/signup">
          <div class="text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-yellow-50 text-black  hover:shadow-none hover:scale-95 transition-all duration-200 ">Learn More</div>
        </a>
        <a href="/login">
          <div class="text-center text-white text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-richblack-800 hover:shadow-none hover:scale-95 transition-all duration-200 ">Book a Demo</div>
        </a>
      </div>
      

    </div>
  )
}

export default Home
