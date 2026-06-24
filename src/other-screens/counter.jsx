import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Counter = () => {
    let [task, setTask] = useState('');
    let [tasks, setTasks] = useState([]);
    let [id,setId] = useState(1);
    // let location = useLocation();
    //3 useState 1 function
    // useEffect(() => {
    //     let text = 'name/desc';
    //     let [a, b] = text.split('/');
    //     if (a === 'name') {
    //         console.log('key', a);
    //     }
    //     if (b == 'desc') {
    //         console.log('order', b);
    //     }
    // }, []);
    // // let tasks = ['a', 'b', 'c'];
    // const [theme, setTheme] = useState(localStorage.getItem('theme'));
    // const [theme2, setTheme2] = useState('light');
    // const [theme3, setTheme3] = useState('light');
    const addTask = () => {
        if (task != '') {
            setTasks([...tasks, 
                {
                    id:id,
                    text:task,
                    status:true
                }
            ]);
            setId(id+1);
            setTask('');
        }
    }
    const DeleteTask = (id) => {
        let newTasks = tasks.filter((i) => i.id != id);
        setTasks(newTasks);
    }
    const Complete = (id) => {
        let newTasks = tasks.map((i) => {
            if (i.id == id) {
                i.status = !i.status;
            }
            return i;
        });
        setTasks(newTasks);
    }
    // const changeTheme = () => {
    //     setTheme2('dark');
    //     setTheme3('light');
    //     if (theme == 'light') {
    //         setTheme('dark')
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         setTheme('light');
    //         localStorage.setItem('theme', 'light');
    //     }
    //     // console.error('Theme:', theme);
    // }
    // const changeTheme2 = () => {
    //     setTheme2('light');
    //     setTheme3('light');
    //     setTheme('dark');
    // }
    // const changeTheme3 = () => {
    //     setTheme3('dark');
    //     setTheme('dark');
    //     setTheme2('dark');
    // }
    return (
        <>
            {/* {theme == 'light' ?
                <div className="col-12 p-5 text-center">
                    Header
                </div>
                :
                <div className="col-12 p-5 text-center bg-dark text-white">
                    Header
                </div>
            } */}
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <br />
            {task}
            <br />
            {/* Length:{tasks.length} */}
            <br />
            <ul>
                {tasks.length > 0 ?
                    <>
                        {tasks.map((a) =>
                            <li>
                                <p>{a.status == true ? a.text : <del>${a.text}</del>}</p>
                                <button onClick={() => Complete(a.id)}>Complete</button>
                                <button onClick={() => DeleteTask(a.id)}>Delete</button>
                            </li>
                        )
                        }
                    </>
                    :
                    <>
                        No records
                    </>
                }
            </ul>
            <br />
            {/* {theme == 'light' ?
                <>
                    <button className="btn btn-primary" onClick={changeTheme}>Click</button>
                </>
                :
                <>
                    <button className="btn btn-dark" onClick={changeTheme}>Click</button>
                </>
            } */}

            {/* {theme == 'light' ?
                <>
                    <div className="col-12">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat officia, iste aliquam minima exercitationem, debitis at blanditiis beatae dolore odit laudantium, voluptatum tenetur nihil vel. Cupiditate, nesciunt autem! Cumque.
                    </div>
                </>
                :
                <>
                    <div className="col-12 text-white bg-dark">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat officia, iste aliquam minima exercitationem, debitis at blanditiis beatae dolore odit laudantium, voluptatum tenetur nihil vel. Cupiditate, nesciunt autem! Cumque.
                    </div>
                </>

            }
            {theme == 'light' ?
                <>
                    <div className="col-12">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat officia, iste aliquam minima exercitationem, debitis at blanditiis beatae dolore odit laudantium, voluptatum tenetur nihil vel. Cupiditate, nesciunt autem! Cumque.
                    </div>
                </>
                :
                <>
                    <div className="col-12 text-white bg-dark">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat officia, iste aliquam minima exercitationem, debitis at blanditiis beatae dolore odit laudantium, voluptatum tenetur nihil vel. Cupiditate, nesciunt autem! Cumque.
                    </div>
                </>

            }
            {theme == 'light' ?
                <div className="col-12 p-5 text-center fixed-bottom">
                    Footer
                </div>
                :
                <div className="col-12 p-5 text-center bg-dark text-white fixed-bottom">
                    Footer
                </div>
            } */}
            {/* <div className="row">
                <div className="col-4 p-4">
                    <div className="block1 bg-dark text-white text-center p-5" style={{ border: '5px solid ' + (theme == 'light' ? 'pink' : '#fff') }} onClick={changeTheme}>
                        <i class="fa-solid fa-circle-half-stroke"></i>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <div className="block2 bg-light text-center p-5" style={{ border: '5px solid ' + (theme2 == 'light' ? 'pink' : '#fff') }} onClick={changeTheme2}>
                        <i class="fa-regular fa-lightbulb"></i>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <div className="block3 bg-dark text-white text-center p-5" style={{ border: '5px solid ' + (theme3 == 'dark' ? 'pink' : '#fff') }} onClick={changeTheme3}>
                        <i class="fa-solid fa-lightbulb"></i>
                    </div>
                </div>
            </div>
            {location.pathname}
            {theme == 'light' &&
                <div className="col-12 p-5 text-center fixed-bottom">
                    Footer
                </div>
            }
            {theme == 'dark' &&
                <div className="col-12 p-5 text-center bg-dark text-white fixed-bottom">
                    Footer
                </div>
            } */}
            {/* {theme2 == 'light' &&
                <div className="col-12 p-5 text-center bg-light fixed-bottom">
                    Footer
                </div>
            }
            {theme3 == 'dark' &&
                <div className="col-12 p-5 text-center bg-dark text-white fixed-bottom">
                    Footer
                </div>
            } */}

            {/* {theme2 == 'light' ?
                <div className="col-12 p-5 text-center fixed-bottom">
                    Footer
                </div>
                :
                <div className="col-12 p-5 text-center bg-dark text-white fixed-bottom">
                    Footer
                </div>
            }
            {theme3 == 'light' ?
                <div className="col-12 p-5 text-center fixed-bottom">
                    Footer
                </div>
                :
                <div className="col-12 p-5 text-center bg-dark text-white fixed-bottom">
                    Footer
                </div>
            } */}
        </>

    );
}
export default Counter;