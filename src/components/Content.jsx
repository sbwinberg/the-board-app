import Task from "./Task"
import Column from "./Column"

export default function Content() {
    return (
        <main>
            <Column title={'Todo'} button={true}>
                <Task title='Handla kek'/>
                <Task title='Handla kek'/>
                <Task title='Handla kek'/>
                <Task title='Handla kek'/>
            </Column>
            <Column>      
                <Task title='Handla kek'/>
                <Task title='Handla kek'/></Column>
            <Column>
                <Task title='Handla kek'/>
                <Task title='Handla kek'/>
            </Column>
        </main>
    )
}