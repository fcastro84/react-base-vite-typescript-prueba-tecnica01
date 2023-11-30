import { ItemElement } from "../interfaces/interfaces"

interface ItemProps {
    element: ItemElement,
    handleClickDelete: () => void
}

export default function Item({ element, handleClickDelete}: ItemProps) {
  return (
    <>
      <li>
                      {element.name} <button onClick={ handleClickDelete }
                        >Delete Item</button>
                      </li>
    </>
  )
}
