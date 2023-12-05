import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

describe('App test', () =>{

    const { getByText } = render(<App/>)

    test('Load App', ()=> {
        
        expect(getByText('Test React-Typescript')).toBeDefined()
        screen.debug()
    });

    test('should add items and remove them', async () => {
         const user = userEvent.setup()

         //render(<App />)

         //buscar el input en el formulario 
         const input = screen.getByRole('textbox')
         expect(input).toBeDefined()

         //buscar el formulario 
         const form = screen.getByRole('form')
         expect(form).toBeDefined()

         //buscar button 
         const button =  form.querySelector('button')
         expect(button).toBeDefined()

         //escribir en el input 
         const textRandom = crypto.randomUUID()
         await user.type(input, textRandom)
         await user.click(button!)

         //asegurar que el elemento se ha agregado 
         const list = screen.getByRole('list')
         expect(list).toBeDefined();

         expect(list.childNodes.length).toBe(1)

         screen.debug()

         //asegurarnos que lo podemos borrar 
         const item = screen.getByText(textRandom)
         const removeButton = item.querySelector('button')
         expect(removeButton).toBeDefined();

         await user.click(removeButton!)

         const noResults = screen.getByText('Not Exits Items...')
         expect(noResults).toBeDefined()
         screen.debug()
         







    })
})