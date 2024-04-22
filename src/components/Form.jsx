import { useState } from "react"


export const Form = () => {
  const [email, setEmail] = useState({ campo: "", valido: null })

  function validarEmail(email) {
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    console.log(email)
    if (expresion.test(email)) {
      setEmail(prevState => {
        return { ...prevState, valido: "true" }
      })
    } else {
      setEmail(prevState => {
        return { ...prevState, valido: "false" }
      })
      return
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (email.valido === "false" | !email.valido) {
      return
    }

    validarEmail(email)

    alert("Email send successfully")

    setEmail({ campo: "", valido: null })
  }

  return (
    <form
      className="relative py-4 w-full flex justify-center items-center gap-x-4 md:col-start-4"
      onSubmit={handleSubmit}
    >
      <input
        className={`py-[14px] px-4 text-sm rounded-full w-full outline-none ${email.valido === "false" && 'border-2 border-bright-red text-bright-red'}`}
        name="email"
        id="email"
        placeholder="Updates in your inbox..."
        value={email.campo}
        onBlur={(e) => validarEmail(e.target.value)}
        onKeyUp={(e) => validarEmail(e.target.value)}
        onChange={(e) => setEmail({ ...email, campo: e.target.value })}
      />
      <input
        className="py-[14px] hover:cursor-pointer hover:opacity-80 px-6 rounded-full bg-bright-red text-white font-bold text-sm uppercase"
        type="submit"
        value="go"
      />
      <p className={`${email.valido === "true" ? 'hidden' : email.valido === "false" ? 'absolute top-16 left-2 mt-2 md:mt-6 italic text-bright-red text-xs block' : null}`}>
        Please insert a valid email
      </p>
    </form>
  )
}