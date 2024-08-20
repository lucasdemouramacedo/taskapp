import style from './TaskList.module.css'
import Task from './Task/Task.jsx'

function TaskList() {
    let tasks = [
        {
            'title': 'Reunião',
            'startTime': '10:30',
            'endTime': '11:30'
        },
        {
            'title': 'Almoço com Fulano',
            'startTime': '12:00',
            'endTime': '13:30'
        },
        {
            'title': 'Mercado',
        },
        {
            'title': 'Reunião',
            'startTime': '10:30',
            'endTime': '11:30'
        },
        {
            'title': 'Almoço com Fulano',
            'startTime': '12:00',
            'endTime': '13:30'
        },
        {
            'title': 'Mercado',
        },
        {
            'title': 'Mercado',
        },
        {
            'title': 'Reunião',
            'startTime': '10:30',
            'endTime': '11:30'
        },
        {
            'title': 'Almoço com Fulano',
            'startTime': '12:00',
            'endTime': '13:30'
        },
        {
            'title': 'Mercado',
        }
    ]
    return (
        <div className={style.taskList}>
            <ul>
                {
                    tasks.map((task, index) => {
                        return (
                            <Task
                                key={index}
                                title={task.title}
                                startTime={task.startTime}
                                endTime={task.endTime}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TaskList