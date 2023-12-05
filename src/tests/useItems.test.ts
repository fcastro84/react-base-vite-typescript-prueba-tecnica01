import { describe, expect, test} from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useItem } from '../hooks/useItem'



describe('Test of hooks', () =>{

    test('should add and remove items', () => {
        const { result } = renderHook(() => useItem())
        // console.log(result.current)

        expect(result.current.items).toEqual([])

        act(() => {
            result.current.addItems('Jugar a videojuegos')
        })

        act(() => {
            result.current.addItems('Ir a correr')
        })

        console.log(result.current)
        expect(result.current.items.length).toBe(2)

        act(() => {
            result.current.removeItems(result.current.items[0].id)
        })

        console.log(result.current)
        expect(result.current.items.length).toBe(1)

        
    })


})