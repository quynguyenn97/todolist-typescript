import { useState } from 'react'
import { Todo } from '../../@types/Todo.type'
import styles from './taskInput.module.scss'
interface TaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  startEditTodo: (id: string) => void
  editTodo: (name: string) => void
  finishEditTodo: () => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }
  return (
    <div>
      <h1 className={styles.title}>To do list Typescript</h1>
      <form action='' className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          onChange={onChangeInput}
          value={currentTodo ? currentTodo.name : name}
        />
        <button type='submit'>{currentTodo ? '✔' : '➕'}</button>
      </form>
    </div>
  )
}
