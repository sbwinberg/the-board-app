export const statuses = [
    {
        title: 'todo',
        id: 1,
    }, 
    {
        title:'in-progress',
        id: 2,
    }, 
    {
        title: 'done',
        id: 3
    }
];

export const tasks = [
    {
        id: 1,
        title: 'Todo',
        status: 'done',
        description: 'Här händer något ballt',
        date: new Date().toLocaleDateString(),
    },
    {
        id: 2,
        title: 'Mow the Lawn',
        status: 'todo',
        description: 'Här händer något coolare',
        date: '2023-02-03',
    },
    {
        id: 3,
        title: 'Go shopping',
        status: 'in-progress',
        description: 'Här händer något häftigt',
        date: '2000-01-01',
    },
    {
        id: 4,
        title: 'Do something great',
        status: 'todo',
        description: 'Här händer något fränt',
        date: '2020-06-11',
    }
]
