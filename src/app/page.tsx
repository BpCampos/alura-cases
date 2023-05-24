import Title from '@/components/Title'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen flex">
      {/*Left side*/}

      <div className="flex justify-end w-1/2 items-center mr-9">
        <section className="w-1/2">
          <img src="../images/alura-logo.svg" alt="Alura logo" className="w-28 p-0 mb-20" />
          <div className="flex items-center  gap-2">
            <p className="bg-purple-300 rounded-2xl px-2 py-1 text-purple-800 font-bold">O que tem de novo?</p>
            <Link href="/faq" className="text-purple-800 font-bold">
              Confira as principais dúvidas
            </Link>
          </div>
          <Title>Alura Cases</Title>
          <p className="mb-4 w-3/4 ">
            Aqui você vai ter acesso a discussões avançadas: as principais decisões sobre arquitetura e design de
            sistemas. Aprenda através das descobertas que as principais empresas de tecnologia enfrentam!
          </p>
          <p className="mb-8">Quer testar antes de todo mundo?</p>
          <form action="" className="flex gap-3">
            <input
              type="text"
              placeholder="Coloque seu email aqui"
              className="border border-black rounded-md px-3 py-1 pr-11"
            />
            <button type="submit" className="bg-purple-950 text-white px-7 py-2 rounded-lg">
              Cadastrar
            </button>
          </form>
        </section>
      </div>

      {/*Right side*/}
      <div className="flex items-center justify-center w-1/2">
        <img
          src="../images/alura-cases.png"
          alt=""
          className="object-cover object-left w-full h-3/4 rounded-s-xl shadow-lg shadow-black"
        />
      </div>
    </main>
  )
}
