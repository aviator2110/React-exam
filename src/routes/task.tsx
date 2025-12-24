export default function Task() {
    const task = {
        name: "TASK NAME",
        description: "TASK DESCRIPTION",
        isCompleted: false,
    };

    return (
        <div id="task">
            <h1>
                {task.name || task.description ? (
                    <>
                        {task.name}
                        <br/>
                        <br/>
                        {task.description}
                    </>
                ) : (
                    <i>No Name</i>
                )}{" "}
            </h1>
        </div>
    );
}