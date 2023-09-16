import React from 'react'
import Calculate from './CalculateButton'
import InputField from './InputField'

const InputBox = () => {

  return (
    <div className="bg-sky-500 p-5 text-black font-bold shadow-xl">
      <form>
        <InputField />
        <Calculate />
      </form>
    </div>
  )
}

export default InputBox