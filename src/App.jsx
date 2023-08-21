import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import UsersList from "./components/UsersList";
import { useForm } from "react-hook-form";

//The base URL to do the API's operations

const BASE_URL = "https://users-crud.academlo.tech";

//The default values: birthday and image_url are not mandatory

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [isUserIdToEdit, setIsUserIdToEdit] = useState();
  const [isShowForm, setIsShowForm] = useState(false);

  //The initialization for the useForm function of the react-hook-form library

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Defines the handling of the birthday and image_url fields and defines if a register is
  //created or modified
  const submit = (data) => {
    if (!data.birthday) {
      data.birthday = null;
    }
    if (!data.image_url) {
      data.image_url = null;
    }
    if (isUserIdToEdit) {
      editUser(data);
    } else {
      createUser(data);
    }
  };

  //for implementing the CRUD operations with axios

  const createUser = (data) => {
    const URL = BASE_URL + "/users/";

    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;

    axios
      .delete(URL)
      .then((res) => {
        getAllUsers();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`;

    axios
      .patch(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
        setIsUserIdToEdit();
      })
      .catch((err) => console.log(err));
  };

  //fetch all users with axios

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res?.data))
      .catch((err) => console.log(err));
  };
  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset(data);
    setIsUserIdToEdit(data.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  //main jsx navigation

  return (
    <main className="font-sans">
      <Header setIsShowForm={setIsShowForm} />
      <Modal
        register={register}
        handleSubmit={handleSubmit}
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        submit={submit}
        reset={reset}
        setIsUserIdToEdit={setIsUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit}
        errors={errors}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleClickEdit={handleClickEdit}
      />
    </main>
  );
}

export default App;
