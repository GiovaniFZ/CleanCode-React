interface HeaderProps{
    onCreateNewToDo: () => void;
}

export default function Header({ onCreateNewToDo }: HeaderProps) {
    return (
        <header>
            <h1>My new innovate to-do list !</h1>
            <button onClick={onCreateNewToDo}>Add new todo</button>
        </header>
    )
}