//to show the title and the main button of the app

const Header = ({ setIsShowForm }) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
  };
  return (
    <header className=" flex justify-between ml-[6vw] w-[42vw] text-lg font-bold   ">
      <h1 className="">User's CRUD</h1>
      <button
        onClick={handleClickShowModal}
        className="bg-purple-p text-white bg-gradient-to-r from-indigo-500 to-purple-500 p-2 hover:bg-purple-p/80 transition-colors hover:animate-pulse text-sm border-[1px] rounded-lg flex justify-between  gap-1 items-center cursor-pointer  "
      >
        {" "}
        <i className="bx bxs-user-plus text-white text-3xl rounded-xl flex"></i>{" "}
        Add new user
      </button>
    </header>
  );
};

export default Header;
