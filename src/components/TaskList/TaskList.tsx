import { Todo } from '../../@types/Todo.type'
import styles from './taskList.module.scss'
interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}
export function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo, deleteTodo } = props
  const onChangeCheckBox = (idTodo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, event.target.checked)
  }
  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Chua Hoan Thanh' : 'Hoan Thanh'}</h2>
      <div className={styles.tasks}>
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <div className={styles.task} key={todo.id}>
              <input
                type='checkbox'
                className={styles.taskCheckbox}
                checked={todo.done}
                onChange={onChangeCheckBox(todo.id)}
              />
              <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
              <div className={styles.taskActions}>
                <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                  ✏
                </button>
                <button className={styles.taskBtn} onClick={() => deleteTodo(todo.id)}>
                  🗑
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
