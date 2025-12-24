import {Form} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { getTasks } from "../tasks";

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? undefined;
    const contacts = await getContacts(q);

    return { contacts, q };
}

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Tasks</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search tasks"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li id="task-list">
                            <Link to={`tasks/1`}>Task 1</Link>
                            <div>
                                <Form action="edit">
                                    <button type="submit">Edit</button>
                                </Form>
                                <Form
                                    method="post"
                                    action="destroy"
                                    onSubmit={(event) => {
                                        if (
                                            !confirm(
                                                "Please confirm you want to delete this task."
                                            )
                                        ) {
                                            event.preventDefault();
                                        }
                                    }}
                                >
                                    <button type="submit">Delete</button>
                                </Form>
                            </div>
                        </li>
                        <li>
                            <Link to={`tasks/2`}>Task 2</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}