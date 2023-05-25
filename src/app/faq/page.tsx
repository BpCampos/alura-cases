import { api } from '@/lib/api'
import Link from 'next/link'
import { metadata } from '../layout'
import Title from '@/components/Title'
import Faq from '@/components/Faq'

interface FAQ {
  answer: string
  question: string
}

metadata.title = 'FAQ - Alura Cases'

export default async function FAQPage() {
  const response = await api.get('/alura-cases-faq.json')
  const faq: FAQ[] = response.data

  return (
    <main className=" max-w-screen ml-5">
      <Title>Alura Cases - FAQ</Title>
      <Link href="/" className="text-purple-800 font-bold text-2xl">
        Ir para a Home
      </Link>
      <ul className="w-3/5 mb-14">
        {faq.map(({ question, answer }) => {
          return <Faq question={question} answer={answer}></Faq>
        })}
      </ul>
    </main>
  )
}
