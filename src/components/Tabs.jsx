function Tabs(props) {
    const { todos } = props;
    const tabs = ['All', 'Open', 'Completed'];
    return (
        <nav className="tab-container" >
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All'
                    ? todos.length
                    : tab === 'Open'
                        ? todos.filter(val => !val.complete).length
                        : todos.filter(val => val.complete).length;

                return (
                    <button key={tabIndex} className="tab-button">
                        <h1>{tab}<span>({numOfTasks})</span></h1>
                    </button>
                );
            })}
        </nav>
    );
}

export default Tabs;