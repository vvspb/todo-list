import React from 'react'
import style from './index.module.less'

export const TodoPanel = ()=> {
    const [inputValue, setInputValue] = React.useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setInputValue(value)
    }

  return (
    <section>
        <label> 
            <input 
                className={style.input}
                type='text'
                value={inputValue}
            />
        </label>
    </section>
  )
}
