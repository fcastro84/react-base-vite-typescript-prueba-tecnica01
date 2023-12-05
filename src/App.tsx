import { FormEvent } from 'react'
import './App.css'
import { UUID } from './interfaces/interfaces';
import Item from './components/Item';
import { useItem } from './hooks/useItem';
import { useSeo } from './hooks/useSeo';

function App() {

  const { items, addItems, removeItems} = useItem();

  useSeo({
    title: `[${items}] News item`,
    description: 'List of Items'
  })

  const handleSubmit = ( evt: FormEvent<HTMLFormElement> ) => {
    evt.preventDefault();

    const { elements } = evt.currentTarget;

    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;
    if( !isInput || input === null) return

    //add element
    addItems(input.value);

    input.value = '';
  }

  const handleClickDelete = (id: UUID) => () => {
    removeItems(id);
  }

  return (
    <>
    <h1>Test React-Typescript</h1>
    <main>
      <aside>
        <form onSubmit={handleSubmit} aria-label="Add new Item">
          <label>
            <input type="text" name="item" placeholder='add Item' />
          </label>
          <button>Add</button>
        </form>
      </aside>
      <section>
        <h2>List of Item</h2>
        {
            items.length === 0
             ? <span>Not Exits Items...</span>
             : (
              <ul>
                {
                  items.map( element => <Item key={element.id} element={element} handleClickDelete={handleClickDelete(element.id)} /> )
                }
              </ul>
             )
        }
        
      </section>
      
    </main>
    </>
  )
}

export default App
