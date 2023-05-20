import { useState } from "react"

const ButtonCart = () => {

    const [isLoading, setisLoading] = useState(false)

    const handleClick = () => {
        setisLoading(!isLoading)
        setTimeout(() => {
            setisLoading(false)
        },3700)
    }

  return (
    <button className={ `${ isLoading ? "button loading" : "button"} `  } onClick={ handleClick }  >
    <span>Add</span>
    <div className="cart">
        <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
    </div>
</button>
  )
}
export default ButtonCart