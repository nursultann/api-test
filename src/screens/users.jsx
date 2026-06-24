import LeftSidebar from "../components/left-sidebar";

const Users = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <LeftSidebar/>
                </div>
                <div className="col-9">
                    <h1>Users</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Users;