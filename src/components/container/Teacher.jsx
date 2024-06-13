import React from 'react'
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
// import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  const accordions = [
    {
      id: 1,
      title: "Apakah anda pernah boker?",
      question:"Iya, saya pernah boker di paret, di celana, maupun di ruangan area merokok."
    },
    {
      id: 2,
      title: "Bagaimana caranya anda boker?",
      question:"Langkah yang harus dilakukan ialah jongkok / duduk diatas WC, kemudian lakukan penekanan pada saluran pernapasan anda sampai tai anda keluar dari dubur dan masuk kedalam lobang WC."
    },
    {
      id: 3,
      title: "Bisakah saat boker sambil melakukan hal lain?",
      question:"Bisa. Anda bisa sambil melakukan ritual seperti memikirkan masa depan, membayangkan anda ketika sukses nanti, dan anda bisa sambil menikmati sebatang rokok Surya dan segelas kopi hangat untuk menemani waktu bokermu."
    },
    {
      id: 4,
      title: "Bagaimana cara anda melakukan cebok?",
      question:"Anda bisa menggunakan tangan dan air di bak mandi sebagai media cebok anda. Selain itu, anda juga bisa menggunakan tissue sebagai media cebok saat tidak ada air, dan alternatif anda juga bisa menggunakan batu sebagai media cebok apabila anda sedang berada di tengah-tengah hutan belantara."
    },
  ];
  return (
    <div className='section bg-gradient-to-b from-[#EAF2F8] via-white to-[#EAF2F8]' id="teacher">
      {/* <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div> */}
      <div className="text-center font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-colorBodies3">Asked Questions</span>
      </div>
      <p className="text-sm leading-7 text-gray text-center">
        Pertanyaan yang Sering Diajukan.
      </p>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  )
}

export default Teacher
