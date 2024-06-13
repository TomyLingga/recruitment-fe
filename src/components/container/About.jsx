import React from 'react';
import about from "../../assets/About.jpg";

const About = () => {
    const persyaratan = [
        {
            id: 1,
            title: "Warga Negara Indonesia (WNI);",
            question:""
        },
        {
            id: 2,
            title: "Jenis Kelamin Pria dan Wanita;",
            question:""
        },
        {
            id: 3,
            title: "Sehat Jasmani/Rohani;",
            question:""
        },
        {
            id: 4,
            title: "Berkelakuan baik;",
            question:""
        },
        {
            id: 5,
            title: "Tidak bertato dan tidak bertindik (untuk pria);",
            question:""
        },
        {
            id: 6,
            title: "Tidak pernah menggunakan dan/atau terlibat narkoba atau psikotropika;",
            question:""
        },
        {
            id: 7,
            title: "Tidak pernah diberhentikan di anak perusahaan atau institusi lainnya dikarenakan hukuman disiplin atau diberhentikan dengan tidak hormat;",
            question:""
        },
        {
            id: 8,
            title: "Bersedia mengikuti seleksi rekrutmen sesuai ketentuan yang berlaku di PT Industri Nabati Lestari;",
            question:""
        },
        {
            id: 9,
            title: "Lulus dalam seleksi calon karyawan baru yang diselenggarakan oleh panitia rekrutmen PT Industri Nabati Lestari.",
            question:""
        },
    ];
    return (
        <section className='section'>
            <div className="grid md:grid-cols-2 gap-8 place-items-center">
                <div className="border-[3px] border-solid border-colorBodies3 rounded-lg bg-white">
                    <img src='img/icon/checklist.png' alt="" className="p-4 w-80" />
                </div>
                <div>
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                      <span className=" text-colorBodies3">Persyaratan Umum</span>
                    </div>
                    <ol className='text-sm text-gray mb-4 space-y-2'>
                      {persyaratan.map((pers) => {
                        return (
                          <li className='w-full list-decimal font-semibold ml-4' key={pers.id}>
                            <span className=''>{pers.title}</span>
                          </li>
                        )
                      })}
                    </ol>
                    {/* <p className="text-sm text-gray leading-7 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
                      eum, explicabo quos eos magni vel corporis voluptatibus, inventore
                      doloremque aliquam pariatur recusandae.
                    </p> */}
                    {/* <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
                      Know More
                    </button> */}
                </div>
            </div>
        </section>
    )
}

export default About
