import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function footer() {
  return (
    <div className="bg-black py-7">
      <p className="text-gray-400 flex justify-center">
        <FontAwesomeIcon icon={faCopyright} className="w-4 mr-3" />
        2021 Alura. Todos os direitos reservados.
      </p>
    </div>
  )
}
